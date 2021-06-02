import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons' 

import { ContainerButton, Item } from './styles'

const ListItem  = () =>{
    return(
        <View>
            <ContainerButton 
            activeOpacity={0.9}
            onPress={()=>alert('Teste')}
            >
                <Feather
                    name='link'
                    color='#fff'
                    size={24}
                />
                <Item numberOfLines={1}>
                    https://youtube.com.dsfsdfsdfgsjddfhgsdhfsdgfjshgdfjsghsfhdgjsdh
                </Item>
            </ContainerButton>
        </View>
    )
}




export default ListItem