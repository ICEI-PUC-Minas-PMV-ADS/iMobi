import React, { useState } from "react";
import axios from "axios";
import { Select } from "./Select";
import { Input } from "./Input";
import { estados } from "../../app/utils/estados";

interface City {
  nome: string;
  estado: string;
}

const CityAutocomplete: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string | undefined>(undefined);
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [isCityInputDisabled, setIsCityInputDisabled] = useState(true);

  const fetchCities = async (value: string, state?: string) => {
    try {
      if (state) {
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`;
        const response = await axios.get<City[]>(url);

        const filteredCities = response.data.filter((city) =>
          city.nome.toLowerCase().includes(value.toLowerCase())
        );

        const limitedSuggestions = filteredCities.slice(0, 3);

        setSuggestions(limitedSuggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (selectedState) {
      fetchCities(value, selectedState);
    }
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedState(state === "all" ? undefined : state);
    setIsCityInputDisabled(state === "all");
    setInputValue("");
  };

  const handleSuggestionClick = (city: City) => {
    console.log("Cidade selecionada: ", city.nome);
    setInputValue(city.nome);
    setSuggestions([]);
  };

  return (
    <div>
      <Select
        onChange={handleStateChange}
        options={estados}
        name="estado"
        error=""
      />
      <div className="mt-4">
        <Input
          type="text"
          name="Cidade"
          placeholder="Cidade"
          error=""
          value={inputValue}
          onChange={handleInputChange}
          disabled={isCityInputDisabled}
        />
      </div>


      <ul className="mt-2 bg-slate-200">
        {suggestions.map((city) => (
          <li
            key={city.nome}
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSuggestionClick(city)}
          >
            {city.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityAutocomplete;
