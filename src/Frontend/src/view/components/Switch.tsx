import { ChangeEvent, forwardRef } from 'react';

export const Switch = forwardRef
  <HTMLInputElement, {
    isChecked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }>
  (
    ({ isChecked, onChange }, ref) => {

      return (
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={onChange}
              ref={ref}
            />
            <div className="w-16 h-10 bg-gray-100 rounded-full shadow-inner transition duration-300 ease-in-out" />
            <div className={`absolute left-1 top-1 w-8 h-8 ${isChecked ? 'bg-green-600' : 'bg-gray-500'} rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-6' : ''}`} />
          </div>
          <span className="ml-2 text-sm text-gray-700">{isChecked ? 'Sim' : 'Não'}</span>
        </label>
      );
    }
  );
