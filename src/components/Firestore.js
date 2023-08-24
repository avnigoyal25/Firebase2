import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export default function Firestore() {
    const[user,setUser]=useState({})
    useEffect(()=>{
        getDocs(collection(db,"user")).then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
                console.log(doc.id,doc.data());
                setUser(doc.data())
        })
        })
    },[])
  return (
    <div>
        <h2>Firestore</h2>
        {Object.keys(user).length ? <div>user is present</div>:
        <div>no data present</div>
        }
    </div> 
  )
}
