import React, { Component } from 'react';
import Header from '../components/header/header'
import Container from '../components/container/container'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Container></Container>
            </div>
        )
    }
}
