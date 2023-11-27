import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { TextInput, HelperText } from 'react-native-paper';

const DropdownExample = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const items = [
    { label: 'Selecione um Estado', value: '' },
    { label: 'São Paulo', value: 'SP' },
    { label: 'Rio de Janeiro', value: 'RJ' },
    // Adicione mais estados conforme necessário
  ];

  return (
    <View style={styles.container}>
      <RNPicker
        selectedValue={selectedValue}
        onValueChange={(value) => {
          setSelectedValue(value);
          setShowPicker(false);
        }}
        style={styles.picker}
        mode="dropdown"
        prompt="Selecione um Estado"
        enabled={!showPicker}
      >
        {items.map((item) => (
          <RNPicker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </RNPicker>

      

      {showPicker && (
        <HelperText type="info">Escolha um Estado</HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  picker: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 52,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 52,
    marginTop: 8,
    marginBottom: 4,
    paddingLeft: 8,
    color: 'black',
  },
});

export default DropdownExample;
