import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-web";

const Cat = () => {
  const [text, setText] = useState('');

  return (
    <View>
       <TextInput
        value={text}
        style={{height: 40}}
        placeholder="inserisci"
        //onChangeText={this.onChangeTextHandle}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button
        title="Clicca"
        onPress={() => setText('jkhjkkh')}
      />
      
    </View>
  );
}

export default Cat;