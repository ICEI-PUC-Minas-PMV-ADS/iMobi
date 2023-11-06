import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Imovel } from "../../../app/entities/Imovel";
import { useNavigate } from "react-router-dom";
import { ImovelResponse } from "../../../app/services/imovelService/getAll";
import { httpClient } from "../../../app/services/httpClient";

interface City {
  nome: string;
  estado: string;
}

const schema = z.object({
  cidade: z.string().min(3, 'Informe a cidade'),
  estado: z.string().min(1, 'Selecione um estado'),
})

type FormData = z.infer<typeof schema>;

export function useCityAutocompleteController() {
  const navigate = useNavigate();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const [suggestions, setSuggestions] = useState<City[]>([]);
  // const [isCityInputDisabled, setIsCityInputDisabled] = useState(true);
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCities = async (value: string, state: string) => {
    try {
      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`;
      const response = await axios.get<City[]>(url);

      const filteredCities = response.data.filter((city: City) =>
        city.nome.toLowerCase().includes(value.toLowerCase())
      );

      const limitedSuggestions = filteredCities.slice(0, 3);

      setSuggestions(limitedSuggestions);
    } catch (error) {
      toast.error('Erro ao buscar cidades');
    }
  }

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setValue('estado', state);

    if (state === "all") {
      setSuggestions([]);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const estado = getValues().estado
    if (value && estado) {
      fetchCities(value, estado);
    }
  }

  const handleSuggestionClick = (city: City) => {
    setValue('cidade', city.nome);
    setSuggestions([]);
  }


  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { cidade } = data;
      setIsLoading(true)

      const { data: imoveis } = await httpClient.get<ImovelResponse[]>(`/propriedade/getbycidade/${cidade}`);

      setImoveis(imoveis)

      navigate(`/feed/${cidade}`, {
        state: {
          imoveis: imoveis
        }
      })

      setIsLoading(false)
    } catch (err: any) {
      toast.error(`${err?.response.data}`);
      setIsLoading(false)
    }
  });

  return {
    register,
    errors,
    suggestions,
    handleStateChange,
    handleInputChange,
    handleSuggestionClick,
    imoveis,
    getValues,
    handleSubmit,
    isLoading
  }

}
