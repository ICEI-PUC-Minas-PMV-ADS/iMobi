import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { useGaleriaController } from './useGaleriaController';

export function Galeria() {
  const {
    register,
    handleSubmit,
    handlePropertySelection,
    selectedPropertyImages,
    imoveisOptions,
    filePreview,
    isPending,
    errors } = useGaleriaController();

  return (
    <div className='container mx-auto'>
      <h1 className="text-2xl font-bold mb-4 text-center">Galeria de Imagens</h1>

      <div className='md:flex md:justify-between p-4 md:p-0 md:mt-10 gap-4 items-center'>
        <div className='mb-10 md:mb-0 md:w-1/2'>
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

        <div className="relative md:w-[550px] h-[550px] rounded mb-4 bg-gray-200">
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
        {selectedPropertyImages && <h1 className='font-medium text-xl mb-4 pl-8 md:p-0 '>Imagens do empreendimento</h1>}

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-8 md:p-0'>
          {selectedPropertyImages.map((imagem, index) => {
            return (
              <div className='overflow-hidden w-[300px] h-[300px] relative rounded'>
                <img className='rounded shadow w-full md:w-auto' src={imagem.propriedadeImagem} key={index} alt={`Image ${index}`} />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}
