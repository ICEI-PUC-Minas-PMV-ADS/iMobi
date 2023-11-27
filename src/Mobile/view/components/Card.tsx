import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

interface CardsProps {
  title: string;
  subtitle: string;
  onPress?: () => void; // Adicione um callback para o evento de clique, opcional
}

const Cards: React.FC<CardsProps> = ({ title, subtitle, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <Card style={styles.card}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
      />
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 8,
  },
  card: {
    // Se desejar, você pode adicionar estilos adicionais para o Card aqui
  },
});

export default Cards;
