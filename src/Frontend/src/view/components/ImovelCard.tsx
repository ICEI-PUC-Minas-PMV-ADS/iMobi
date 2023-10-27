export function ImmovelCard() {
  return (
    <div className="shadow rounded max-w-sm mb-8">
      <div className="overflow-hidden">
        <img className="w-full rounded-t-lg" alt="Sala" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      <div className="p-4">
        <div className="mb-4">
          <h1 className="font-bold">Cabo Branco, João Pessoa</h1>
          <span className="text-xs">Apartamento para Alugar</span>
        </div>

        <div className="flex justify-between mb-4">
          <h2 className="font-bold">R$ 2500,00</h2>
          <p>Aluguel</p>
        </div>

        <div className="flex justify-between font-bold mb-4">
          <p className="text-xs">55m2</p>
          <p className="text-xs">2 quartos</p>
          <p className="text-xs">2 banheiros</p>
        </div>
      </div>
    </div>
  )
}
