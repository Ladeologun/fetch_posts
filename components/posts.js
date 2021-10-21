import React, { useState } from "react";
import {Text, View, TouchableOpacity, SafeAreaView, StyleSheet, ActivityIndicator, TextInput } from "react-native";
import Post from "./Post";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  // Add to post
  const [Posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [postfilter, setpostfilter]= useState([]);
  const handleFecth = async () => {
    try {
      setIsLoading(true);
    const response = await fetch(url)
    const data = await response.json();
    setPosts(data);
    console.log(data)
    setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }
  const filterPosts = (e) => {
    let newArray = [...Posts];
    let searchInput = e
    let filteredPosts = newArray.filter(post => {
      return post.title.toLowerCase().includes(searchInput.toLowerCase())
    }
    )
    setpostfilter(filteredPosts)
    
  }
  return (
    <SafeAreaView style={styles.root}> 
            {!Posts &&  
                    <TouchableOpacity onPress={handleFecth}
                        activeOpacity={0.7} >
                        <View style={styles.btn}>           
                            <Text style={styles.btnTxt} > Load Posts </Text> 
                        </View>        
                            {isLoading &&         
                        <ActivityIndicator size="small" color="#000" />        
                            }
                    </TouchableOpacity>      
                    }
    <View>      
                {Posts &&     
        <View style={styles.searchBox} >         
            <View>            
                <Text> Search:  </Text>          
            </View>        
            <View style={styles.inputBox} >            
                        <TextInput style={styles.input} onChangeText={(e) => filterPosts(e)}/>          
            </View>        
        </View>        
        }
            
            {postfilter.length === 0 ?         
            Posts?.map(el =>   
            <Post key={el?.id}  title={el?.title} body={el?.body} id={2}  />    
                    )
            : postfilter.map(el =>   
            <Post key={el?.id}  title={el?.title} body={el?.body} id={2}  />    
                    )
            }
    </View>    
</SafeAreaView>  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  btn: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5  },
  btnTxt: {
    color: "#fff",
    textAlign: "center",
  },  
  inputBox: {
  borderColor: 'red',
  boderWidth: 3,
  padding: 10},
input: {
  borderColor: 'red',
  boderWidth: 3,
  padding: 10,
      backgroundColor: "#f7f7f7",
  borderRadius: 5},
  searchBox: {
    flexDirection: 'row',
    alignItems: "center"  }
})
export default Posts;
