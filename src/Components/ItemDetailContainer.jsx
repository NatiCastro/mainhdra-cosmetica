import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import '../Styles/Cards.css';

function LinearColor() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
    </Stack>
  );
}

export default function ItemDetailContainer () {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const { idItem } = useParams();

    useEffect(()=>{

        setTimeout(()=>{

        const db= getFirestore();

        const productosRef = doc(db, 'nuevos-productos', idItem);

        getDoc(productosRef).then((res) => setItems({id: res.id, ...res.data()}))
                            .catch(error => console.log(error))
                            .finally(() => setLoading(false))

                        }, 1000);

    },[idItem]);


    return (
        <>
            {loading ? (
                        <LinearColor />
                        ) : ( 
                        <div className='container-itemdetail'>
                            <ItemDetail producto = {items} />
                        </div> 
                        )
            }
        </>
    );
}