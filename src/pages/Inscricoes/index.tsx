import React,{useState, useEffect} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import {Feather as Icon} from '@expo/vector-icons'
import api from '../../services/api'
import {useNavigation, useRoute}from '@react-navigation/native'

interface Params{
  evento_id: number
}

interface Inscricoes{
  id: number,
  name: string,
  email: string,
  dt_nasc: Date,
}


const Inscricoes = () =>{
 
  const [insc, setInsc] = useState <Inscricoes[]>([])
  const navigation = useNavigation();
  const route = useRoute()

  const routeParams = route.params as Params;

 useEffect(()=>{
   api.get(`events/${routeParams.evento_id}`).then((response)=>{
     setInsc(response.data)
   })
 },[])

  function handleNavigateBack(){
    navigation.goBack();
  }

  return(
    <View style = {styles.container}>
        <TouchableOpacity>
          <Icon name = 'arrow-left' size={20} color= '#fff' onPress={handleNavigateBack}/>
        </TouchableOpacity>
  
        <ScrollView >
        <Text>{ insc.map((insc) => insc.name)}</Text>
           
        
        </ScrollView>
         
      </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 ,
    color: '#fff'
  },
  
  itemTitle: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 14,
    color: '#fff',
    
  },
})

export default Inscricoes;