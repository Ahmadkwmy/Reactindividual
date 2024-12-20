import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const DiscountCalculator = () => {
  const [price, setPrice] = useState(''); 
  const [discount, setDiscount] = useState(''); 
  const [discountedPrice, setDiscountedPrice] = useState(''); 

  const calculateDiscount = (priceValue: string, discountValue: string) => {
    const price = parseFloat(priceValue) || 0;
    const discount = parseFloat(discountValue) || 0; 

    if (price > 0 && discount >= 0 && discount <= 100) {
      const discountAmount = (price * discount) / 100; 
      const finalPrice = price - discountAmount; 
      setDiscountedPrice(Math.ceil(finalPrice).toString()); 
    } else {
      setDiscountedPrice(''); 
    }
  };

  return (
    <View style={styles.container}>
     
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter price"
        value={price}
        onChangeText={(text) => {
          setPrice(text); 
          calculateDiscount(text, discount); 
        }}
      />

      <Text style={styles.label}>Discount %:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter discount percentage"
        value={discount}
        onChangeText={(text) => {
          setDiscount(text); 
          calculateDiscount(price, text);
        }}
      />

      <Text style={styles.label}>Discounted Price:</Text>
      <TextInput
        style={styles.input}
        editable={false} 
        value={discountedPrice}
        placeholder="Discounted price will appear here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default DiscountCalculator;
