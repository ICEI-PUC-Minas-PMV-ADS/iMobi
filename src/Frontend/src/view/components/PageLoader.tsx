import { Transition } from "@headlessui/react";
import { Spinner } from "./Spinner";

interface PageLoaderProps {
  isLoading: boolean
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  return (

    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-gray-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <Spinner />
      </div>
    </Transition>


  )
}
