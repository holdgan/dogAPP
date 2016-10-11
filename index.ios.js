/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


class Son extends Component {
//     var Son=React.createClass({
    constructor(props) {
        super(props)
        this.state = {times: this.props.times}
    }

    timesPlus() {
        let times = this.state.times;
        times++;
        this.setState({
            times: times
        })
    }

    timesReset() {
        this.props.timesReset()
    }

    componentWillReceiveProps(props) {
        this.setState({
            times: props.times
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.timesPlus.bind(this)}>
                    son:hit me
                </Text>
                <Text style={styles.instructions}>
                    son:{this.state.times}
                </Text>
                <Text style={styles.instructions} onPress={this.timesReset.bind(this)}>
                    son:reset
                </Text>
            </View>
        );
    }
}

class dogAPP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hit: true,
            times: 3
        }
    }

    timesReset() {
        this.setState({
            times: 0
        })
    }

    willHit() {
        this.setState({
            hit: !this.state.hit
        })
    }

    timesPlus() {
        let times = this.state.times;
        times += 3;
        this.setState({
            times: times
        })
    }


    render() {
        return (
            <View style={styles.container}>
                { this.state.hit
                    ? <Son times={this.state.times} timesReset={this.timesReset.bind(this)}/>
                    : null}
                <Text style={styles.welcome} onPress={this.timesReset.bind(this)}>
                    father:reset
                </Text>
                <Text style={styles.instructions} onPress={this.willHit.bind(this)}>
                    father:hit
                </Text>
                <Text style={styles.instructions}>
                    father:{this.state.times}
                </Text>
                <Text style={styles.instructions} onPress={this.timesPlus.bind(this)}>
                    father:again three
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('dogAPP', () => dogAPP);
