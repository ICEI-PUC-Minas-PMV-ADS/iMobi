import { useState } from 'react';
import axios from 'axios';

const GeocodeComponent = () => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const geocodeAddress = () => {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    axios.get(apiUrl)
      .then(response => {
        if (response.data.length > 0) {
          const firstResult = response.data[0];
          setLatitude(firstResult.lat);
          setLongitude(firstResult.lon);
        } else {
          alert('Não foi possível encontrar as coordenadas para o endereço fornecido.');
        }
      })
      .catch(error => {
        console.error('Erro ao acessar o serviço de geocodificação', error);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Digite o endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={geocodeAddress}>Obter Latitude e Longitude</button>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
};

export default GeocodeComponent;
