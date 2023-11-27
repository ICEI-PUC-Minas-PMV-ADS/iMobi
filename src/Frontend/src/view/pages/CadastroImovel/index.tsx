import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import { Select } from "../../components/Select";
import { useCadastroImovelController } from "./useCadastroImovelController";
import { Finalidade } from "../../../app/enums/Finalidade";
import { Status } from "../../../app/enums/Status";
import { Input } from "../../components/Input";
import { localStorageKeys } from "../../../app/config/localStorageKeys";

export function CadastroImovelPage() {
  const {
    register,
    handleSubmit,
    errors,
    isPending
  } = useCadastroImovelController();

  const userId = localStorage.getItem(localStorageKeys.USER_ID);

  const finalidadeOptions = [
    { value: '', label: "Selecione uma finalidade" },
    { value: Finalidade.Venda.toString(), label: "Venda" },
    { value: Finalidade.Aluguel.toString(), label: "Aluguel" },
    { value: Finalidade.Nd.toString(), label: "Nd" },
  ];

  const statusOptions = [
    { value: '', label: "Selecione um status" },
    { value: Status.EmConstrucao, label: "Em construção" },
    { value: Status.Lancamento, label: "Lançamento" },
    { value: Status.Pronto, label: "Pronto" },
  ];

  return (
    <div className="flex justify-center  w-full">
      <div className=" p-4 w-full max-w-[600px] rounded-lg">
        <div className="container mx-auto">
          <header>
            <h1 className="text-center w-full text-xl font-bold">
              Cadastre um imóvel agora 🏢
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="mt-[35px]">
            <div>
              <div className="mt-8">
                <h1 className="font-medium">Finalidade</h1>

                <div className="grid grid-cols-2 gap-4">
                  <div className="mt-2">
                    <Select
                      placeholder="Finalidade"
                      options={finalidadeOptions}
                      error={errors.finalidade?.message}
                      {...register('finalidade', { valueAsNumber: false })}
                    />
                  </div>

                  <div className="mt-2">
                    <Select
                      placeholder="Status"
                      options={statusOptions}
                      error={errors.status?.message}
                      {...register('status', { valueAsNumber: false })}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h1 className="font-medium">Localização</h1>

                <div className="mt-2">
                  <Input
                    error={errors.endereco?.cidade?.message}
                    type="text"
                    placeholder="Cidade"
                    {...register('endereco.cidade')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <div className="mt-2">
                    <Input
                      error={errors.endereco?.bairro?.message}
                      type="text"
                      placeholder="Bairro"
                      {...register('endereco.bairro')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.endereco?.rua?.message}
                      type="text"
                      placeholder="Rua"
                      {...register('endereco.rua')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.endereco?.numero?.message}
                      type="number"
                      placeholder="Número"
                      {...register('endereco.numero')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.endereco?.estado?.message}
                      type="text"
                      placeholder="Estado"
                      {...register('endereco.estado')}
                    />
                  </div>


                </div>
                <div className="mt-2">
                  <Input
                    error={errors.endereco?.cep?.message}
                    type="text"
                    placeholder="CEP"
                    {...register('endereco.cep')}
                  />
                </div>
              </div>

              <div className="mt-8">
                <h1 className="font-medium">Informações gerais</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="mt-2">
                    <Input
                      error={errors.areaPrivativa?.message}
                      type="number"
                      placeholder="Área privativa"
                      {...register('areaPrivativa')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.areaTotal?.message}
                      type="number"
                      placeholder="Área total"
                      {...register('areaTotal')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.quartos?.message}
                      type="number"
                      placeholder="Quartos"
                      {...register('quartos')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.suites?.message}
                      type="number"
                      placeholder="Suítes"
                      {...register('suites')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.garagem?.message}
                      type="text"
                      placeholder="Garagem"
                      {...register('garagem')}
                    />
                  </div>

                  <div className="mt-2">
                    <Input
                      error={errors.detalhes?.message}
                      type="text"
                      placeholder="Detalhes"
                      {...register('detalhes')}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h1 className="font-medium">Valores</h1>

                <div className="mt-2">
                  <Input
                    error={errors.valorCondominio?.message}
                    type="number"
                    placeholder="Valor do condomínio"
                    {...register('valorCondominio')}
                  />
                </div>

                <div className="mt-2">
                  <Input
                    error={errors.valorAluguel?.message}
                    type="number"
                    placeholder="Valor do aluguel"
                    {...register('valorAluguel')}
                  />
                </div>

                <div className="mt-2">
                  <Input
                    error={errors.preco?.message}
                    type="number"
                    placeholder="Preço"
                    {...register('preco')}
                  />
                </div>
              </div>
            </div>

            <Button isPending={isPending} className="w-full" type="submit">Cadastrar Imóvel</Button>
          </form>

          <div className="text-center mt-4">
            <Link to={`/perfil/${userId}`} className="text-blue-500 underline hover:text-blue-400 transition-all duration-300">
              <small>Voltar para o perfil</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
