import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View} from 'react-native';

import EventCard from './Eventcard'; 

const styles = StyleSheet.create({
    list: {
        paddingTop: 20,
        backgroundColor:'#F3F3F3',
        height: '100%',
    },
});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({ events: this.state.events.map(evt => ({
                ...evt,
                timer:Date.now(),
            })), 
        });
        
        },1000); 
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));

        this.setState({ events }); 
        
        
    }
    render(){
        return (
                <FlatList
                style={styles.list}            
                data={this.state.events}
                renderItem = {({ item })=><EventCard event={item}/>}
                keyExtractor={item => item.id}
                />
        );
    }



}

export default EventList;