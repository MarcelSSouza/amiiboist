import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';


const SearchBar = () => {
  const [input, setInput] = useState('');
  const [amiiboData, setAmiiboData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setIsLoading(true);
    setError(null);
    const url = `https://www.amiiboapi.com/api/amiibo/?name=${encodeURIComponent(input)}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setAmiiboData(data.amiibo);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
      <View style={styles.container}>
        <ScrollView style={styles.lista}>
      <TextInput 
        style={styles.input}
        placeholder="Enter character name"
        value={input}
        onChangeText={setInput}
      />
      <Button 
        title="Search" 
        onPress={handleSearch} 
      />
      {isLoading &&     <ActivityIndicator size="large" />
}
      {error && <Text>Error: {error.message}</Text>}
      {amiiboData.map((amiibo, index) => (
        <View key={index} style={styles.amiiboContainer}>
          
          <Image source={{ uri: amiibo.image }} style={styles.image} />
          <Text style= {styles.title}>{amiibo.name}</Text>
          <Text style= {styles.serie}>{amiibo.gameSeries}</Text>
          <Text>Release Dates:</Text>
          <Text> JP: {amiibo.release.jp}</Text>
          <Text>NA: {amiibo.release.na}</Text>
          <Text>EU: {amiibo.release.eu}</Text>
        </View>
      ))}
      </ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center', // Vertical alignment
    alignItems: 'center', // Horizontal alignment
    flex: 1, // Take up all screen
  },
  lista: {
    width: '100%', // Full width
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
    width: '100%', // Responsive width
  },
  amiiboContainer: {
    flex: 1, // Take up available space
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Responsive width
    borderWidth: 0.5, 
    borderColor: '#d6d7da',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%', // Responsive width
    height: 100, // Fixed height or aspect ratio
    resizeMode: 'contain', // Maintain aspect ratio
  },
  serie: {
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default SearchBar;
