import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error: string | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={id ?? name}
          placeholder=" "
          className={cn(
            'w-full bg-white rounded-lg border border-gray-200 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-700 outline-none',
            error && '!border-red-500',
            className
          )}
        />

        <label
          htmlFor={id ?? name}
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

        {error &&
          (
            <div className="flex gap-2 items-center mt-2 text-red-500">
              <CrossCircledIcon />
              <span className="text-xs">{error}</span>
            </div>
          )
        }
      </div>
    )
  }
);
