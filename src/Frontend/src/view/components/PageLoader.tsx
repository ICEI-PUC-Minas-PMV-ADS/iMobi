import { Spinner } from "./Spinner";

export function PageLoader() {
  return (
    <div className="bg-gray-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  )
}
