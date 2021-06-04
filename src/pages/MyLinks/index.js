import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import { Modal, ActivityIndicator, ActivityIndicatorBase } from 'react-native'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/statusBarPage'
import ListItem from '../../components/ListItem'
import ModalLink from '../../components/ModalLink' 

import { useIsFocused } from '@react-navigation/native'
import { getLinkSave, deleteLink } from '../../utils/storeLinks'

import { 
    Container, 
    Title, 
    ListLink, 
    ContainerEmpty,
    WarningText
} from './styles'

const Mylinks = () =>{
    const isFocused = useIsFocused()

    const [links, setLinks] = useState([])
    const [data, setData] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const getLink = async () =>{
            const result = await getLinkSave('insiderlinks')
            setLinks(result)
            setLoading(false)
        }

        getLink()

    }, [isFocused])

    const handleItem = (item) => {
        setData(item)
        setModalVisible(true)
    }

    const handleDelete= async (id) =>{
        const result = await deleteLink(links, id)
        setLinks(result)
    }

    return(
        <Container>
            <StatusBarPage
                barStyle='light-content'
                backgroundColor='#132742'
            />

            <Menu/>

            <Title>Meus Links</Title>

            {loading && (
                <ContainerEmpty>
                    <WarningText>
                        <ActivityIndicator 
                            color={'#fff'}
                            size={25}/>
                    </WarningText>
                </ContainerEmpty>
            )
            }

            {!loading && links.length === 0 &&(
                <ContainerEmpty>
                    <WarningText>
                        Você ainda não possui nenhum link ;-;
                    </WarningText>
                </ContainerEmpty>
            )

            }

            <ListLink
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
                contentContainerStyle={{ paddingButtom: 20}}
                showVerticalScrollIndicator={false}
            />
            <Modal
                    visible = {modalVisible}
                    transparent
                    animationType={'slide'}
                >
                    <ModalLink
                        onClose={() => setModalVisible(false)}
                        data={data}
                    />
                </Modal>
        </Container>
    )
}

export default Mylinks