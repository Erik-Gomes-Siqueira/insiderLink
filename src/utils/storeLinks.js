import AsyncStorage from '@react-native-async-storage/async-storage'
// key: insiderlinks
//Trazer os links salvos
export const getLinkSave = async (key) =>{
    const myLinks = await AsyncStorage.getItem(key)
    let linkSaves = JSON.parse(myLinks) || []
    return linkSaves
}

//salvar um link no storage
export const saveLink = async (key, newLink) =>{
    let linkStorage = await getLinkSave(key)
    //não armazenar um mesmo link duas vezes ou mais
    const hasLink = linkStorage.some( link => link.id === newLink.id)
    if(hasLink){
        console.log('Link já incluso na lista')
        return//Parar a execução
    }
    linkStorage.push(newLink)
    await AsyncStorage.setItem(key,JSON.stringify(linkStorage))
    console.log('Links Salvo')
}

export const deleteLink = async (links, id) =>{
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem('insiderlinks', JSON.stringify(myLinks))
    console.log('Link deletado do storage')
    return myLinks
}








