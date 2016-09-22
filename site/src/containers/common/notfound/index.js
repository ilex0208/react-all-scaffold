import React from 'react';
import { Button } from 'AptAntd';
import './notfound.scss';

const NotFound = () =>(
  <div className='normal'>
    <div className='container'>
      <h1 className='title'>404</h1>
      <p className='desc'>未找到该页面</p>
      <a href="/"><Button type="primary" style={{ marginTop: 5 }}>返回首页</Button></a>
    </div>
  </div>
);

export default NotFound;
