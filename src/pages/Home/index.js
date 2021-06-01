import React from 'react'
import { View, Text } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/statusBarPage'
import Menu from '../../components/Menu'

import { Feather } from '@expo/vector-icons'
import { 
    ContainerLogo, 
    Logo, 
    ContainerContent, 
    Title, 
    Subtitle,
    ContainerInput,
    BoxIcon,
    Input,
    ButtonLink,
    ButtonLinkText
} from './styles'

const Home = () =>{
    return(
        <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{flex:1, justifyContent: 'center'}}
        >
            <StatusBarPage
            barStyle='light-content'
                backgroundColor='#1ddbb9'
            />

            <Menu/>

            <ContainerLogo>
                <Logo source={require('../../assets/Logo.png')} resizeMode='contain' />
            </ContainerLogo>

            <ContainerContent>
                <Title>Insider Link</Title>
                <Subtitle>Cole seu link aqui para encurtá-lo</Subtitle>

                <ContainerInput>
                    <BoxIcon>
                        <Feather 
                            name='link' 
                            size={22}
                            color='#fff'
                        />
                    </BoxIcon>
                    <Input
                        placeholder='Cole seu link aqui'
                        placeholderTextColor='#fff'
                    />
                </ContainerInput>
                <ButtonLink>
                    <ButtonLinkText>Encurtar</ButtonLinkText>
                </ButtonLink>
            </ContainerContent>

        </LinearGradient>
    )
}

export default Home