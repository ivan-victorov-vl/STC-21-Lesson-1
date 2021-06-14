import React from 'react';
import ReactDOM from 'react-dom';
import css from'./style/main.scss';

const App = () => 
<div>
    <h1>Hello world</h1>
    <div>
        <span>
            <img src='/src/img/logo.png'></img>
        </span>
    </div>
</div>;
ReactDOM.render(<App/>, document.getElementById('root'));
