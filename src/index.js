import React, { useState, useEffect } from 'react';
import { SafeAreaView,FlatList, Text, StyleSheet,StatusBar, TouchableOpacity  } from 'react-native';

import api from './services/api';

function App(){
    const [ projects, setProjects ] = useState([]);
   
    //chamada a api.
    useEffect(() => {
        async function request(){
            try {
                const response = await api.get('projects')
                setProjects(response.data);
            } catch (error) {
                console.log({erro: error.message});
            }
        }

        request()
    }, []);


    async function handleAddProject(){
        const response = await api.post('projects', {
            title: 'HTML project',
            owner: 'Andrew Reis',
            techs: ['HTML5', 'CSS3', 'JS']
        });
        
        setProjects([...projects, response.data])
    }

    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            <SafeAreaView style={styles.container}> 
                <FlatList 
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({item: project}) => {
                        return(
                            <Text key={project.id} style={styles.title}> {project.owner} </Text>
                        );
                    }}
                />

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6} 
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}> add+ Projetos </Text>
                </TouchableOpacity>
            </SafeAreaView>
            
            {/* <SafeAreaView style={styles.container}>
                {
                    projects.map(project => (
                        <Text key={project.id} style={styles.title}> {project.owner} </Text>
                    ))
                }
            </SafeAreaView> */}
        </>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        color: '#fff',
        fontSize: 30
    },

    button:{
        alignSelf:'stretch',
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 4
    },

    buttonText:{
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default App;