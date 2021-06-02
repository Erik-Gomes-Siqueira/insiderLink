import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/statusBarPage'
import { Container, Title, ListLink } from './styles'
import ListItem from '../../components/ListItem'



const Mylinks = () =>{
    return(
        <Container>
            <StatusBarPage
                barStyle='light-content'
                backgroundColor='#132742'
            />

            <Menu/>

            <Title>Meus Links</Title>

            <ListLink
                data={[{id:1, link:'teste.com.br'}, {id:2, link:'teste.com.br'}]}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ListItem data={item}/>}
                contentContainerStyle={{ paddingButtom: 20}}
                showVerticalScrollIndicator={false}
            />
        </Container>
    )
}

export default Mylinks