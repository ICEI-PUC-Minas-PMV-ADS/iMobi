import React from "react";
import { Select } from "./Select";
import { Input } from "./Input";
import { estados } from "../../app/utils/estados";
import { useCityAutocompleteController } from "../pages/Home/useCityAutocompleteController";
import { Button } from "./Button";


const CityAutocomplete: React.FC = () => {
  const { register, errors, handleInputChange, handleStateChange, handleSuggestionClick, suggestions, handleSubmit, isLoading } = useCityAutocompleteController();

  return (
    <form onSubmit={handleSubmit}>
      <Select
        options={estados}
        error={errors.estado?.message}
        {...register('estado', {
          onChange: (e) => handleStateChange(e)
        })}
      />
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Cidade"
          error={errors.cidade?.message}
          {...register('cidade', {
            onChange: (e) => handleInputChange(e)
          })}
        />
      </div>

      <ul className="mt-2 bg-slate-50 rounded shadow">
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

      <Button isPending={isLoading} className="w-full">Buscar imóveis</Button>
    </form>
  );
};

export default CityAutocomplete;


