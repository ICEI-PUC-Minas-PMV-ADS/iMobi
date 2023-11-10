import { Spinner } from "./Spinner";

interface PageLoaderProps {
  isLoading: boolean
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <>
      {isLoading && (
        <div className="bg-gray-50 fixed top-0 left-0 w-full h-full flex justify-center items-center flex-1">
          <Spinner />
        </div>
      )}
    </>





  )
}
