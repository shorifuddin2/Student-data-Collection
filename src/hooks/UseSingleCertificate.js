import  { useEffect, useState } from 'react';

const UseSingleCertificate = () => {
    const [Certificate, setCertificate]= useState([]);

    useEffect(({id})=>{
        fetch(`Certificate.json/${id}`)
        .then(res =>res.json())
        .then(data => setCertificate(data))
    },[])
    return [Certificate, setCertificate];
};

export default UseSingleCertificate;