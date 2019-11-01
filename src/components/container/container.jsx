import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ArticleItem from './articleItem/articleItem'
import './container.less'
const fetch = require('../../utils/fetch').fetch
export default class container extends Component {
    constructor() {
        super() 
        this.state = {
            articleList: []
        }
    }
    componentDidMount() {
        fetch('/web/article/index',{limit:10})
            .then(res => {
                this.setState({
                    articleList: res
                })
            })
    }
    render() {
        const { articleList } = this.state
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
                            {
                                articleList.map((item,index) => (
                                    <ArticleItem key={index} item={item}/>
                                ))
                            }
                        </ul>
                    </div>
                    <aside className="view-side">
                        
                    </aside>
                </div>
            </main>
        )
    }
}