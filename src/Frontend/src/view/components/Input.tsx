import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={id ?? name}
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
);
