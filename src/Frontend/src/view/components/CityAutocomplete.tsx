import React, { useState } from "react";
import axios from "axios";

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
    <div className="w-64 mx-auto mt-10">
      <select
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
        onChange={handleStateChange}
      >
        <option value="all">Selecione um estado</option>
        <option value="PB">Paraíba</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        {/* Adicione mais estados conforme necessário */}
      </select>
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        className={`w-full mt-2 p-2 border-gray-300 rounded-md ${isCityInputDisabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white focus:ring focus:ring-opacity-50 focus:ring-blue-400"
          }`}
        value={inputValue}
        onChange={handleInputChange}
        disabled={isCityInputDisabled}
      />
      <ul className="mt-2">
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
