import React, {useEffect, useState} from 'react'
import {Feather as Icon} from '@expo/vector-icons'
import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import api from '../../services/api'

interface Params{
  event_id: number
}

interface Data{
  event:{
    name: string,
    description: string,
    dt_init: Date,
    dt_fin: Date,
    qtd_vgs: number
  };
  insc_event:{
    name: string
  }[];
}

const DetailEvent = () =>{
  const [data, setData] = useState<Data>({} as Data)
  

  const navigation = useNavigation();
  const route = useRoute();

  

  const routeParams = route.params as Params;
  const eventoId = routeParams.event_id; 
 
  useEffect(() =>{
    api.get(`events/${routeParams.event_id}`).then(response=>{
    setData(response.data)
    })
  },[])


  function handleNavigateBack(){
    navigation.goBack();
  }
  function handleNavigateToInsc(id: number){
    navigation.navigate('Inscricoes', {evento_id:id})
   }

  if(!data.event){
    return null
  }

  return(
    <SafeAreaView style = {{flex: 1}}>
    <View style = {styles.container}>
      <TouchableOpacity onPress = {handleNavigateBack}>
        <Icon name = 'arrow-left' size = {20} color= '#fff'/>
      </TouchableOpacity>
  <Text style={styles.eventName}>{data.event.name}</Text>
      <Text style = {styles.infoTitle}>Descrição: </Text>
  <Text style = {styles.info}>{data.event.description}</Text>
  <Text style = {styles.info}>Data: {data.event.dt_init}</Text>
  <Text style = {styles.info}>Data: {data.event.dt_fin}</Text>
  <Text style = {styles.infoTitle}>Quantidades de vagas: </Text>
  
  <Text style = {styles.info}>Data: {data.event.qtd_vgs}</Text>
  
    </View>
    <View style = {styles.footer}>
    <RectButton style = {styles.button} onPress = {()=>{}}>
        <Text style = {styles.buttonText}>Inscreva-se</Text>
      </RectButton>



     <RectButton  style = {styles.button} onPress = {() => handleNavigateToInsc(eventoId)}>
      <Text style = {styles.buttonText}>Lista de Participantes</Text>
    </RectButton>
     
    </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
  },

  eventName: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 24,
  },
  info: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: "#fff",
  },

  address: {
    marginTop: 32,
  },

  infoTitle: {
    marginTop: 24,
    color: "#fff",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  addressContent: {
    fontFamily: "Roboto_400Regular",
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: "48%",
    backgroundColor: "#18beb9",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    marginLeft: 8,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    textAlign: 'center'
  },
});


export default DetailEvent;