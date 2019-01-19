import React from 'react';
import axios from 'axios';
import { View, TextInput, Button } from 'react-native';
import { ListItem } from 'react-native-elements';

class Home extends React.Component {
    state = {
        title: '',
        description: ''
    };

    componentDidMount() {
        // this.getTodos();
    };

    addTodo = () => {
        const {
            title,
            description
        } = this.state;

        var instance = axios.create({
            baseURL: 'http://192.168.56.1:3000',
        });

        instance.post('/add', { title, description })
            .then(() => this.setState({ title: '', description: '' }))
            .catch(e => console.log(e));
    };

    getTodos = () => {
        var instance = axios.create({
            baseURL: 'http://192.168.56.1:3000',
        });

        instance.get('/get')
            .then(res => console.log(res))
            .catch(e => console.log(e));
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{ padding: 10, height: 40 }}
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                    placeholder='Title'
                />
                <TextInput
                    style={{ padding: 10, height: 40 }}
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                    placeholder='Description'
                />
                <Button
                    onPress={this.addTodo}
                    title='Add Todo'
                    color='#008080'
                />
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            subtitle={l.subtitle}
                            leftIcon={{ name: l.icon }}
                        />
                    ))
                }
            </View>
        );
    };
};

const list = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President',
        icon: 'flight-takeoff'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
]

export default Home;