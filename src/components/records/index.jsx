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
    const [roll1, setRoll1] = useState([])


    const recordsHandler = (e) => {
        e.preventDefault();
        let unsubscribe = null;
        // const getRealTimeData = async () => {
        // 
        const q = query(collection(db, roll), orderBy("createdOn", "desc"));
        unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                // cities.push(doc.data());
                let data = doc.data();
                data.id = doc.id;
                cities.push(data)
            });
            setRoll1(cities)
            console.log("Current cities in CA: ", cities);
        });


    }
    // console.log(roll2);

    return (
        <div>
            <h1>Previous Record Of Students</h1>

            <div>
                <form className="form1" onSubmit={recordsHandler}>
                    <input type="number" name="" id="" className="iInn"
                        placeholder="enter your roll number ..."
                        onChange={(e) => { setRoll(e.target.value) }}
                    />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="cont0">
                    {
                        roll1.map((eachPost, i) => (
                            <div>


                                <div className="cont">
                                    <div><span><b>Date :</b></span>
                                        <span className="date1">
                                            {
                                                // (eachPost?.createdOn?.seconds === undefined) ? null
                                                // :

                                                moment(
                                                    (eachPost?.createdOn?.seconds) * 1000)
                                                    .format('Do MMMM, h:mm a ')

                                            }</span>

                                    </div>
                                    <div><span><b>Status :</b></span>
                                    <span className="status1">{eachPost?.Status}</span></div>
                                </div>

                            </div>
                        ))
                    }


                </div>



            </div>






        </div>



    )
}
export default Records;