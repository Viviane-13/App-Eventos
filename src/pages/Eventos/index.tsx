import React from 'react'
import Constants from 'expo-constants'
import {Feather as Icon} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {View, StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native'

const Eventos = () =>{
  const navigation = useNavigation();
  function handleNavigateBack(){
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      
      <TouchableOpacity>
        <Icon name = 'arrow-left' size={20} color= '#fff' onPress={handleNavigateBack}/>
      </TouchableOpacity>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Cadastre ou participe dos eventos.</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style = {styles.itemsContainer}>
        
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text style = {styles.itemTitle}>OSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text>OSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text>OSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text>OSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text>OSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text>OSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text>OSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Text>OSI</Text>
          </TouchableOpacity>
      
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  title: {
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 24,
    color: '#fff'
  },

  description: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
    fontFamily: "Roboto_400Regular",
  },



  itemsContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: 16,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },

  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",

    textAlign: "center",
  },

  selectedItem: {
    borderColor: "#34CB79",
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 13,
  },
});


export default Eventos;