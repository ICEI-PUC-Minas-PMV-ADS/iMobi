import { useState } from "react";

export function Header() {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  return (
    <header className="container mx-auto bg-blue-500">
      <nav className="z-50 py-5 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="p-4">
            <h1>Logo</h1>
          </span>

          <span onClick={toggleMobileMenu} className="text-white cursor-pointer mx-2 md:hidden block">{isMobileMenuVisible ? 'x' : '☰'}</span>
        </div>

        <ul className={`md:flex md:items-center md:z-auto md:static absolute text-white bg-[#002647] w-full left-0 md:w-auto md:py-0 py-2 md:pl-0  md:opacity-100 ${isMobileMenuVisible ? "opacity-100 left-[0px]" : "opacity-0 left-[-400px]"} transition-all ease-in-out duration-500  pb-6`}>
          <li className="mx-4 my-4 md:my-0">
            <a className=" hover:text-cyan-500 duration-500" href="#">Home</a>
          </li>
          <li className="md:mx-3  mx-4 my-4 md:my-0">
            <a className=" hover:text-cyan-500 duration-500" href="#">A PRO</a>
          </li>
          <li className="mx-4 my-4 md:my-0">
            <a className="hover:text-cyan-500 duration-500" href="#">Cases</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a className="hover:text-cyan-500 duration-500" href="#">Blog da PRO</a>
          </li>

          <button className="bg-[#009fe3] text-white duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">Contato</button>
        </ul>
      </nav>
    </header>
  );
}


