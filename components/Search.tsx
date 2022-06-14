import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, Button } from "react-native";
import axios from "axios";

const Search =() => {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');
    const [drinks, setDrinks] = useState({drinks: []});
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        if (buttonClicked===true) {
        axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php/?s=${search}`)
        .then(res => {
             const drinks = res.data.drinks;
            setDrinks({ drinks });
     })}
    }, [search]);


    return (
       <> 
        <p>{search}</p>
        <TextInput
          style={styles.input}
         placeholder="inserisci" 
         onChangeText={newText => setText(newText)}
          defaultValue={text}
       />
       <Button
        // style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
         title="Clicca"
         onPress={() => {setSearch(text); setButtonClicked(true)}}
       />
       <ul>
      {drinks.drinks.map(drink=> <li>{drink.strDrink}</li>)}
     </ul>
     </>
    )
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
export default Search;