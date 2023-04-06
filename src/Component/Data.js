import React, { useEffect, useState } from 'react';

const Data = () => {
    const[datas,setDatas]=useState([])
    useEffect(()=>{
        fetch('https://studentcollectionserver.onrender.com')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1>Data</h1>
        </div>
    );
};

export default Data;