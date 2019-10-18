import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './routes/router'
import { AppContainer } from 'react-hot-loader'
import * as serviceWorker from './serviceWorker';
import './styles/common.less';
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
}
render(Route)
if (module.hot) {
    module.hot.accept('./routes/router', () => {
      render(Route);
    })
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
