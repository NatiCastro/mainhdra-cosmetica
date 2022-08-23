import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import "../Styles/Cards.css";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Footer from './Footer';

function LinearColor() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
    </Stack>
  );
}

export default function ItemListContainer () {

    const [loading, setLoading] = useState(true);

    const [items, setItems] = useState([]);
    console.log(items);

    const { categoria } = useParams();

    useEffect(()=>{

        setTimeout(()=>{

            const db = getFirestore();

            let productosRef;

            if (categoria) {
                productosRef = query(collection(db, 'nuevos-productos'), where('categoria', '==', categoria));
            } else {
                productosRef = collection(db, 'nuevos-productos');

            }

            getDocs(productosRef).then((res)=> {
                                        if (res.size === 0) {
                                            console.log('error')

                                        } else {   
                                            setItems(res.docs.map((item) =>({id: item.id, ...item.data()})));

                                        }
                                    })
                                .catch(error => console.log(error))
                                .finally(() => setLoading(false))
            
        },1000);

    },[categoria]);

    return (
        <>        
            {loading ? (
                <LinearColor />
            ) : (
                
            <div className="card">
                <ItemList productos={items}/>
                <Footer />
            </div>
            )}
            
        </>
    );
}