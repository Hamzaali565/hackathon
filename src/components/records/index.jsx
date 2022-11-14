import { useState } from "react";
import moment from "moment/moment"
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, addDoc, doc, onSnapshot, query
    , deleteDoc, updateDoc, orderBy
} from "firebase/firestore";
import { useEffect } from 'react';
import './index.css'

const firebaseConfig = {
    apiKey: "AIzaSyAuoAhY0akZEx3zTDcjLYcYfNSfrk52T5M",
    authDomain: "hackathone-75dc2.firebaseapp.com",
    projectId: "hackathone-75dc2",
    storageBucket: "hackathone-75dc2.appspot.com",
    messagingSenderId: "217365806057",
    appId: "1:217365806057:web:38aaa195d160e90a04e978"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





const Records = () => {
    const [roll, setRoll] = useState("")
    const [roll2, setRoll2] = useState([])


    const recordsHandler = (e) => {
        e.preventDefault();
        let unsubscribe = null;
        // const getRealTimeData = async () => {

        const q = query(collection(db, roll),  orderBy("createdOn", "desc"));
        unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                // cities.push(doc.data());
                let data = doc.data();
                data.id = doc.id;
                cities.push(data)
            });
            setRoll2(cities)
            console.log("Current cities in CA: ", cities);
        });


    }
    console.log(roll2);

    return (
        <div>
            <h1>Previous Record Of Students</h1>

            <div>
                <form onSubmit={recordsHandler}>
                    <input type="number" name="" id=""
                        placeholder="enter your roll number ..."
                        onChange={(e) => { setRoll(e.target.value) }}
                    />

                </form>
                <div>
                    {
                        roll2.map((eachPost, i) => (

                            <div className="cont">
                                <div><span>Date :</span>
                                    <span>{(eachPost?.createdOn?.seconds === undefined) ? null
                                        :
                                      
                                        moment(
                                            (eachPost?.createdOn?.seconds) * 1000)
                                            .format('Do MMMM, h:mm a ')
                                        
                                    }</span>

                                </div>
                                <div><span>Status :</span><span>{eachPost?.Status}</span></div>

                            </div>
                        ))
                    }


                </div>



            </div>






        </div>



    )
}
export default Records;