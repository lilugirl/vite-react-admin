import React, { useEffect } from 'react';
import {Button} from 'antd';
import axios  from '../utils';
const Home=()=>{
    useEffect(()=>{
        axios.get('/api/index-infos').then((err)=>{
            console.log('res',err)
        })
    })
    return <div>
        <h2>Home Page</h2>
        <Button type="primary">按钮</Button>
    </div>
}
export default Home;