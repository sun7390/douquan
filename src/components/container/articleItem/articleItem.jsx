import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './articleItem.less'
export default class ArticleItem extends Component{
    constructor() {
        super()
    }
    static propTypes = {
        item: PropTypes.object.isRequired
    }
    static defaultProps = {
        item: {
            "id":1,
            "topic":"Spring Boot",
            "title":"Spring Boot2 系列教程",
            "count":67,
            "comment":17,
            "timestamp":"2017-12-31T16:00:01.000Z"
        }
    }
    render() {
        const { item } = this.props
        return (
            <div className="content-box">
                <div className="info-box">
                    <div className="info-meta">
                        <ul className="meta-list"> 
                            <li className="meta-item"><a href="/">{item.topic}</a></li>
                            <li className="meta-item"><a href="/"> {item.timestamp.slice(0,item.timestamp.indexOf("T"))}</a></li>
                        </ul>
                    </div>
                    <div className="info-title">
                        <Link to="/">{item.title}</Link>
                    </div>
                    <div className="info-action">
                        <ul className="action-list">
                            <Link to="/" className="actions">
                                <li className="iconfont action">&#xec7f;</li>
                                <span className="count">{item.count}</span>
                            </Link>
                            <Link  to="/"  className="actions">
                                <li className="iconfont action">&#xe635;</li>
                                <span className="count">{item.comment}</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}