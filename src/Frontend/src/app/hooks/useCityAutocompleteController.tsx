import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";


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
  const [isCityInputDisabled, setIsCityInputDisabled] = useState(true);

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
    setValue('estado', state); // Define o valor do estado no formulário
    setIsCityInputDisabled(state === "all");
    if (state === "all") {
      setSuggestions([]);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value)
    setValue('cidade', value);
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
      console.log(data)
    } catch (err) {
      toast.error('Erro ao buscar imagens')
    }
  })

  return {
    register,
    handleSubmit,
    errors,
    suggestions,
    isCityInputDisabled,
    handleStateChange,
    handleInputChange,
    handleSuggestionClick,
  }

}
