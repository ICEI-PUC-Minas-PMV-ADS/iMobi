import * as React from 'react';
import { Avatar, Card, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

// Defina o tipo corretamente para props
interface LeftContentProps {
  size: number; // ou qualquer outra propriedade necessária
}

// Use o tipo definido para LeftContentProps
const LeftContent: React.FC<LeftContentProps> = props => (
  <Avatar.Icon {...props} icon="folder" />
);

const ImovelCard: React.FC = () => (
    <TouchableOpacity>
        <Card>    
            <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />    
        </Card>
    </TouchableOpacity>
);

export default ImovelCard;
