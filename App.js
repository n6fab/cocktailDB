import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-web";

const Cat = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
 
//  const stampa
  return (
    <View>
       <p>{search}</p>
       <TextInput
        style={{height: 40}}
        placeholder="inserisci"
        //onChangeText={this.onChangeTextHandle}
     onSubmitText={newText => setText(newText)}
      //onSubmitEditing={stampa}
      onPress={stampa}
    
     onChangeText={newText => setText(newText)}
     defaultValue={text}
       // defaultValue={text}
      />
      <Button
        title="Clicca"
      //  onPress={() => stampa()}
       onPress={() => setSearch(text)}
      />
      
    </View>
  );
}

export default Cat;

const stampa = () => {
  //setText(newText);
  console.warn(text);
}