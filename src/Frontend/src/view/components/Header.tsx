import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/hooks/useAuth";
import { localStorageKeys } from "../../app/config/localStorageKeys";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
  const { signedIn, logout } = useAuth();
  const navigate = useNavigate();

  const userId = localStorage.getItem(localStorageKeys.USER_ID)

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  const handleLogout = () => {
    logout()

    navigate('login')
  }

  return (
    <div className="bg-slate-100 relative mb-10 relative z-[2]">
      <header className="container mx-auto">
        <nav className="z-50 py-5 md:flex md:items-center md:justify-between ">
          <div className="flex justify-between items-center">
            <span className="p-4">
              <h1>iMobi</h1>
            </span>

            <span onClick={toggleMobileMenu} className=" cursor-pointer mx-2 md:hidden block">{isMobileMenuVisible ? 'x' : '☰'}</span>
          </div>

          <ul className={`md:flex md:items-center md:z-auto md:static absolute   w-full left-0 md:w-auto md:py-0 py-2 md:pl-0  md:opacity-100 ${isMobileMenuVisible ? "opacity-100 left-[0px]" : "opacity-0 left-[-400px]"} transition-all ease-in-out duration-500 bg-slate-100  pb-6`}>
            <li className="mx-4 my-4 md:my-0">
              <Link className=" hover:text-cyan-500 duration-500" to="/">Home</Link>
            </li>
            <li className="md:mx-3  mx-4 my-4 md:my-0">
              <Link className=" hover:text-cyan-500 duration-500" to="/feed">Feed</Link>
            </li>

            {signedIn && (
              <li className="md:mx-3  mx-4 my-4 md:my-0">
                <Link className=" hover:text-cyan-500 duration-500" to={`/perfil/${userId}`}>Perfil</Link>
              </li>
            )}

            {!signedIn && (
              <Link to="/login">
                <Button>Entrar</Button>
              </Link>
            )}

            {signedIn && (
              <Button onClick={handleLogout}>Sair</Button>
            )}
          </ul>
        </nav>
      </header>
    </div>

  );
}


