import React, { useState } from "react";
import axios from "axios";
import { Select } from "./Select";
import { Input } from "./Input";
import { estados } from "../../app/utils/estados";
import { useCityAutocompleteController } from "../../app/hooks/useCityAutocompleteController";

const CityAutocomplete: React.FC = () => {
  const { register, errors, handleInputChange, handleStateChange, handleSuggestionClick, suggestions, isCityInputDisabled } = useCityAutocompleteController();

  return (
    <div>
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
          disabled={isCityInputDisabled}

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
    </div>
  );
};

export default CityAutocomplete;
