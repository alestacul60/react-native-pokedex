import { Icon, Input } from "native-base";
import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';


 export default function Buscador() {

  const [text, setText] = useState('');

    return (
      <Input
        placeholder="Buscar Producto"
        backgroundColor='white'
        marginBottom={10}
        rounded='xl'
        py={3}
        px={1}
        fontSize={14}
        returnKeyType="search"
        onSubmitEditing={({ nativeEvent }) => setText(nativeEvent.text)}
        InputLeftElement={
            <Icon 
            m={2}
            ml={3}
            size={6}
            color='gray.400'
            as={<MaterialIcons name="search" />}
            />
        }
        />
    );
      }
