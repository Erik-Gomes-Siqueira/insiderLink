import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from './pages/Home'
import Mylinks from './pages/MyLinks'

import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

const Routes = () => {
    return(
        <Drawer.Navigator
            drawerContentOptions={{
                activeBackgroundColor:'#2CCBB9',
                activeTintColor:'#fff',
                marginTop: 16,
                labelStyle:{
                    fontSize: 19,
                }
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar Link',
                    drawerIcon: ({focused, size, color}) =>(
                        <Ionicons
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Mylinks"
                component={Mylinks}
                options={{
                    title: 'Meus Links',
                    drawerIcon: ({focused, size, color}) =>(
                        <Ionicons
                            name={focused ? 'star' : 'star-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes


