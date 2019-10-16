import React, { Component } from 'react'
import './header.less'
//import PropTypes from 'prop-types'
export default class basicheader extends Component {
    /*static propTypes = {
        menus: PropTypes.array.isRequired
    }*/
    static defaultProps = {

    }
    constructor() {
        super()
        this.state = {
            menus: [{
                title: 'index',
                href: '/index',
                text: '首页'
            },{
                title: 'about',
                href: '/about',
                text: '关于'
            }]
        }
    }
    render() {
        return(
            <header className="main-header-box">
                {
                    this.state.menus.map((menu,i) => {
                        return (<li key={i}><a href={menu.href}>{menu.text}</a> </li>)
                    })
                }
            </header>
        )
    }
}
