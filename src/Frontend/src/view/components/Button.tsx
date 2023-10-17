import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> { }

export function Button(props: ButtonProps) {
  return (
    <button className="mt-2 bg-blue-500 disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium text-white disabled:text-gray-400 disabled:cursor-not-allowed transition-all hover:bg-blue-600" {...props} />
  )
}
