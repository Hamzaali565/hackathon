import { initializeApp } from "firebase/app";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect } from 'react';
import './index.css'
import { async } from '@firebase/util';
import Dropdown from 'react-bootstrap/Dropdown';

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






const Attendence = () => {


    const [roll, setRoll] = useState("")
    const [roll1, setRoll1] = useState([])



    useEffect(() => {
        // return () => {
        //     unsubscribe();
        // }

    }, [])




    const SubmitFormHandler = (e) => {
        e.preventDefault();
        let unsubscribe = null;
        // const getRealTimeData = async () => {

        const q = query(collection(db, roll),);
        unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data());
            });
            setRoll1(cities)
            console.log("Current cities in CA: ", cities);
        });






        // try {
        //     const docRef = await addDoc(collection(db, roll), {
        //         name: name,
        //         Father_Name: father,
        //         Roll_No: roll,
        //         Contact_No: contact,
        //         CNIC: cnic,
        //         Course_Name: course,
        //         Lab: lab,
        //         Class_Timming: timming,
        //         Class_Schedule: schedule,
        //         Teacher_Name: teacher,
        //         Section_Name: section,
        //         Batch_No: batch, 
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }


    }



    return (
        <div>
            <form onSubmit={SubmitFormHandler}>
                <Form.Label htmlFor="inputPassword5">Roll Number</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Input your Roll No. "
                    onChange={(e) => { setRoll(e.target.value) }}
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                {/* <input type="text"  name="" id="" /> */}
                <button type="submit">Enter</button>
            </form>

            <div>
                {
                    roll1.map((eachItem, i) => (
                        <div key={i}>
                            <div className="main">
                                <div className="nameImage">
                                    <div className="Name">
                                        <div><span><b>Name </b>:</span><span>{eachItem.name}</span></div>
                                        <div><span><b>Father Name</b>:</span><span>{eachItem.Father_Name}</span></div>

                                    </div>
                                    <div><img height='150px' width='150px' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                </div>

                                <div className="cnic">
                                    <div><span><b>Contact No</b>  :</span><span>{eachItem.Contact_No}</span></div>
                                    <div><span><b>Roll No  </b>:</span><span>{eachItem.Roll_No}</span></div>
                                    <div><span><b>CNIC No  </b>:</span><span>{eachItem.CNIC}</span></div>
                                </div>
                                <div className="cnic">
                                    <div><span><b>Course Name </b>:</span><span>{eachItem.Course_Name}</span></div>
                                    <div><span><b>Lab </b>:</span><span>{eachItem.Lab}</span></div>
                                    <div><span><b>Teacher Name </b>:</span><span>{eachItem.Teacher_Name}</span></div>
                                </div>
                                <div className="cnic1">
                                    <div><span><b>Section </b>:</span><span>{eachItem.Section_Name}</span></div>
                                    <div><span><b>Batch No</b>:</span><span>{eachItem.Batch_No}</span></div>
                                </div>
                                <div> <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">Present</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Late</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Absent</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Leave</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></div>
                            </div>



                        </div>
                    ))




                }




            </div>





        </div>

    )


}
export default Attendence;