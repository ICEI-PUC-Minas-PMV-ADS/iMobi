import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { useGaleriaController } from './useGaleriaController';
import { ImagemResponse } from '../../../app/services/imagemService/getByImovelId';

export function Galeria() {
  const { register, errors, handleSubmit, getImagesForSelectedProperty, imoveisOptions, filePreview, isPending } = useGaleriaController();

  const [selectedPropertyImages, setSelectedPropertyImages] = useState<ImagemResponse>([]);

  const handlePropertySelection = (propertyId: string) => {
    const imagesForProperty = getImagesForSelectedProperty(propertyId);
    setSelectedPropertyImages(imagesForProperty);
  };

  console.log('Imagens selecionadas: ', selectedPropertyImages.length > 0 ? selectedPropertyImages[0].propriedadeImagem : 'No images selected')


  return (
    <div className='container mx-auto'>
      <h1 className="text-xl font-bold mb-4 text-center">Galeria de Imagens</h1>

      <div className='md:flex md:justify-around p-4 md:p-0 md:mt-10'>
        <div className='mb-10 md:mb-0'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Select
                placeholder='Selecione um imóvel'
                error={errors.propriedadeId?.message}
                options={imoveisOptions}
                {...register('propriedadeId', {
                  onChange: (e) => handlePropertySelection(e.target.value)
                })}
              />
            </div>

            <div className='mb-4'>
              <Input
                type='number'
                placeholder='Ordem da imagem'
                error={errors.ordem?.message}
                {...register('ordem')}
              />
            </div>

            <div className='mb-4'>
              <Input
                type="file"
                error={(errors.arquivoImagem?.message || '') as string}
                multiple={false}
                accept="image/*"
                {...register('arquivoImagem')}
              />
            </div>

            <Button isPending={isPending} className='w-full'>Enviar</Button>
          </form>
        </div>

        <div className="container mx-auto relative md:w-1/2 h-[500px] rounded mb-4 bg-gray-200">
          {filePreview ? (
            <img
              src={filePreview}
              alt="preview"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          ) : null}
        </div>

      </div>

      <div className='mt-4'>
        <h1 className='font-medium'>Imagens do empreendimento</h1>
        <div className='flex gap-4 mt-4 bg-slate-50 p-4 rounded shadow w-full overflow-hidden'>
          {selectedPropertyImages.map((imagem, index) => {
            return (
              <div className='overflow-hidden  shadow rounded'>
                <img className='h-[150px]' src={imagem.propriedadeImagem} key={index} alt={`Image ${index}`} />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}
