import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Input from '../components/Input';
import Search from '../components/SearchBar';
import SelectInput from '../components/InputSelect';
import BlueButton from '../components/Button';
import Cards from '../components/Card'; // Importando o componente Card
import ImovelCard from '../components/ImovelCard';
import styles from '../components/Text';

const HomeScreen: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('');  

  const [corretores, setCorretores] = useState([
    { id: '1', nome: 'Corretor 1', avaliacao: 4.5 },
    { id: '2', nome: 'Corretor 2', avaliacao: 4.8 },
    { id: '3', nome: 'Corretor 3', avaliacao: 4.2 },
    { id: '4', nome: 'Corretor 4', avaliacao: 4.2 },
    { id: '5', nome: 'Corretor 5', avaliacao: 4.9 },
  ]);  
  const corretoresOrdenados =  [...corretores].sort((a, b) => b.avaliacao - a.avaliacao);
  
  const renderCorretorCard = (corretor: { id: string; nome: string; avaliacao: number }) => (
    <View key={corretor.id}>
      <Cards title={corretor.nome} subtitle={`Avaliação: ${corretor.avaliacao}`} />
    </View>
  );  
  const corretoresExibicao = corretoresOrdenados.slice(0, 3);

  const { width } = Dimensions.get('window');
  
  const [selectedState, setSelectedState] = useState<string>('');

  const handleCorretorPress = (corretor: { id: string; nome: string; avaliacao: number }) => {
    // Lógica a ser executada quando um corretor for clicado
    console.log(`Clicou no corretor: ${corretor.nome}`);
  };

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado!');
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <PaperProvider>
        <View style={{ padding: 19 }}>
          <Search />

          <SelectInput />

          <Input label="Digite a cidade" />

          <BlueButton label="Buscar" onPress={handlePress} />

          <Text style={styles.heading}>
            Confira os imóveis recentes
          </Text>          
          <ImovelCard/>
                    
          <Text style={styles.heading}>
            Confira os corretores com melhores avaliações
          </Text>

          {corretoresExibicao.map(renderCorretorCard)}
        </View>
      </PaperProvider>
    </ScrollView>
  );
};

export default HomeScreen;
