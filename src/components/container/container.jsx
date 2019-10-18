import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ArticleItem from './articleItem/articleItem'
import './container.less'
export default class container extends Component {
    constructor() {
        super() 
        this.item = {
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
        return(
            <main className="main-container">
                <div className="view">
                    <div className="view-context">
                        <nav className="category-nav">
                            <header className="category-list">
                                <nav className="list-nav">
                                    <ul className="nav-list">
                                        <li className="nav-item"><a href="/">热门</a></li>
                                        <li className="nav-item"><a href="/">最新</a></li>
                                        <li className="nav-item"><a href="/">热榜</a></li>
                                    </ul>
                                </nav>
                            </header>
                        </nav>
                        <ul className="article-list">
                            <ArticleItem item={this.item}/>
                        </ul>
                    </div>
                    <aside className="view-side">
                        
                    </aside>
                </div>
            </main>
        )
    }
}