import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './articleItem.less'
export default class ArticleItem extends Component{
    constructor() {
        super()
    }
    static defaultProps = {
        item: {
            meta: {
                topic: "http",
                author: "sunyang"
            },
            title: "关于 http 缓存，这些知识点你可能都不懂",
            count: 10,
            comment: 10
        }
    }
    render() {
        return (
            <div className="content-box">
                <div className="info-box">
                    <div className="info-meta">
                        <ul className="meta-list"> 
                            <li className="meta-item"><a href="/">{this.props.item.meta.topic}</a></li>
                            <li className="meta-item"><a href="/">{this.props.item.meta.author}</a></li>
                        </ul>
                    </div>
                    <div className="info-title">
                        <Link to="/">{this.props.item.title}</Link>
                    </div>
                    <div className="info-action">
                        <ul className="action-list">
                            <Link to="/" className="actions">
                                <li className="iconfont action">&#xec7f;</li>
                                <span className="count">17</span>
                            </Link>
                            <Link  to="/"  className="actions">
                                <li className="iconfont action">&#xe635;</li>
                                <span className="count">6</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}