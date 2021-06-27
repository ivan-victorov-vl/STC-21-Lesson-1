import React from 'react';
import logo from '../img/logo.png';

const H1 = () => (<h1>Hello world</h1>)

const Img = () => (<div>
<span>
    <img src={logo}></img>
</span>
</div>)

const Page = () => (
<div>
    <H1 />
    <Img />
</div>)

export default Page;