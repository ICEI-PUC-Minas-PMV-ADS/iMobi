import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        name={name}
        id={id ?? name}
        {...props}
        placeholder=" "
        className="w-full bg-white rounded-lg border border-gray-200 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-700 outline-none"
      />

      <label
        htmlFor={id ?? name}
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>
    </div>
  )
}
