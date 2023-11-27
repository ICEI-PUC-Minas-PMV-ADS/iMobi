import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className=" p-4 w-full max-w-[455px] rounded-lg">
        {/* Pagina vai trocar aqui */}
        <Outlet />
      </div>
    </div>
  )
}
