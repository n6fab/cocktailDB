import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View  } from "react-native-web";
import axios from "axios";

const Search = () => {
const [text, setText] = useState('');
const [search, setSearch] = useState('');

  return (
    <View>
    <p>{search}</p>
    <TextInput
      style={styles.input}
     placeholder="inserisci" 
     onChangeText={newText => setText(newText)}
      defaultValue={text}
   />
   <Button
     style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
     title="Clicca"
     onPress={() => setSearch(text)}
   />
 </View>
);
}
export default class App extends React.Component {
  state = {drinks: []}
  componentDidMount() {
    axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php/?s=margarita`)
   .then(res => {
      const drinks = res.data.drinks;
      this.setState({ drinks });
     })
   }
  
   render() {
    return (
     <ul>
      {this.state.drinks.map(drink=> <li>{drink.strDrink}</li>)}
     </ul>
    )
   }
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
/*
export default class DrinksLis extends React.Component {
  state = {drinks: []}
  
   componentDidMount() {
    axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php/?s=`)
   .then(res => {
      const drinks = res.data.drinks;
      this.setState({ drinks });
     })
   }
  
   render() {
    return (
     <ul>
      {this.state.drinks.map(drink=> <li>{drink.strDrink}</li>)}
     </ul>
    )
   }
}*/