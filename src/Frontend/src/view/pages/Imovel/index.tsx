import { useImovelController } from "./useImovelController";
import areaTotal from '../../../assets/areaTotal.svg';
import quarto from './../../../assets/quarto.svg';
import banheiro from './../../../assets/banheiro.svg';
import carro from './../../../assets/carro.svg';
import { useState } from "react";


export function Imovel() {
  const { imovel, filteredImages, isLoadingImagens } = useImovelController();
  const [selectedImage, setSelectedImage] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    if (filteredImages)
      setCurrentSlide((prevSlide) => (prevSlide === filteredImages.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    if (filteredImages)
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? filteredImages.length - 1 : prevSlide - 1));
  };

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };


  return (
    <div className="flex items-center justify-center container mx-auto">
      <div className="p-4 w-full overflow-hidden">
        <h1 className="font-bold text-2xl mb-4">{imovel?.detalhes}</h1>

        <div className="lg:grid lg:grid-cols-4">
          <div className="lg:col-start-1 lg:col-span-3 overflow-hidden rounded shadow">
            {isLoadingImagens ? (
              <div className="rounded animate-pulse bg-gray-800 h-full transition-all ease-in-out cursor-wait"></div>
            ) : (
              filteredImages && (
                <div>
                  <img
                    className="rounded"
                    src={selectedImage ?? filteredImages[0]?.propriedadeImagem}
                    alt="Imagem Principal"
                  />
                </div>

              )
            )}

          </div>
          <div className="w-full lg:ml-4 mt-4 lg:mt-0">
            <div className="slider-container relative">
              <ul className="list-none gap-4 lg:mt-0 lg:grid lg:grid-cols-2 flex">
                {isLoadingImagens ? (
                  <div className="rounded animate-pulse bg-gray-800 h-full transition-all ease-in-out cursor-wait"></div>
                ) : (
                  filteredImages &&
                  filteredImages.slice(currentSlide, currentSlide + 6).map((imagem, index) => (
                    <li className="h-[90px] w-[130px] overflow-hidden rounded hover:scale-105 transition-all ease-in-out" key={imagem.id}>
                      <img
                        className="rounded hover:opacity-70 transition-all ease-in-out cursor-pointer"
                        src={imagem.propriedadeImagem}
                        alt={`Imagem ${currentSlide + index + 2}`}
                        onClick={() => handleImageClick(imagem.propriedadeImagem)}
                      />
                    </li>
                  ))
                )}
              </ul>
              <button onClick={prevSlide} className="slider-control prev">
                &#9664;
              </button>
              <button onClick={nextSlide} className="slider-control next">
                &#9654;
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-4">
            <small>{imovel?.areaTotal} m² | {imovel?.quartos} quartos | {imovel?.suites} suítes</small>
            <h1 className="text-xl font-bold">Aluguel R$ {imovel?.valorAluguel},00</h1>
            <h2>Condomínio R$ {imovel?.valorCondominio},00</h2>
          </div>

          <div className="grid grid-cols-3 text-center mt-4 mb-4 shadow rounded p-8 gap-8">

            <div className="grid grid-cols-1">
              <img className="m-auto" src={areaTotal} alt="icone" />
              <p className="text-md font-medium">{imovel?.areaTotal} m² tot.</p>
            </div>

            <div className="grid grid-cols-1">
              <img src={areaTotal} className="m-auto" alt="icone" />
              <p className="text-md font-medium">{imovel?.areaPrivativa} m² útil</p>
            </div>

            <div className="grid grid-cols-1">
              <img className="m-auto" src={quarto} alt="icone" />
              <p className="text-md font-medium">{imovel?.quartos} quartos</p>
            </div>

            <div className="grid grid-cols-1">
              <img className="m-auto" src={banheiro} alt="icone" />
              <p className="text-md font-medium">{imovel?.suites} suítes</p>
            </div>

            <div className="grid grid-cols-1">
              <img className="m-auto" src={carro} alt="icone" />
              <p className="text-md font-medium">Possui garagem: {imovel?.garagem}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
