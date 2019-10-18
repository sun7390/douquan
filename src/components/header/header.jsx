import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <div className="container">
                    <Link to="/" className="logo">
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg" alt="兜圈"/>
                    </Link>
                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-left">
                                <ul className="left-items">
                                    {
                                        this.state.menus.map((menu,i) => {
                                            return (<li className="left-item" key={i}><a href={menu.href}>{menu.text}</a> </li>)
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="nav-right">
                                搜索
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
