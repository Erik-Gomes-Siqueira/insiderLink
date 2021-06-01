import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import StatusBarPage from '../../components/statusBarPage'


const Mylinks = () =>{
    return(
            <View>
                <StatusBarPage
                    barStyle='light-content'
                    backgroundColor='#132742'
                />
            </View>
    )
}

export default Mylinks