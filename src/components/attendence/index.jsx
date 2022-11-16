import { initializeApp } from "firebase/app";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import {
    getFirestore, collection, addDoc, doc, onSnapshot, query
    , deleteDoc, updateDoc, serverTimestamp, orderBy
} from "firebase/firestore";
import { useEffect } from 'react';
import './index.css'
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';


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
    const [isEditing, setEditing] = useState(null);
    const [Lab, setLab] = useState("");
    const [Teacher, setTeacher] = useState("");
    const [Section, setSection] = useState("");
    const [Timing, setTiming] = useState("");
    const [roll1, setRoll1] = useState([]);
    const [present1, setPresent1] = useState("Present")
    const [absent1, setAbsent1] = useState("Absent")




    // return () => {
    //     unsubscribe();
    // }
    const SubmitFormHandler = (e) => {
        e.preventDefault()
        let unsubscribe = null
        // const getRealTimeData = async () => {

        const q = query(collection(db, roll),)
        unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = []
            querySnapshot.forEach((doc) => {
                // cities.push(doc.data())
                let data = doc.data()
                data.id = doc.id
                cities.push(data)
            })
            setRoll1(cities)
            console.log("Current cities in CA: ", cities)
        })

    }




    // const SubmitFormHandler = (e) => {
    //     e.preventDefault();
    //     let unsubscribe = null;
    //     // const getRealTimeData = async () => {

    //     const q = query(collection(db, roll), );
    //     unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         const cities = [];
    //         querySnapshot.forEach((doc) => {
    //             // cities.push(doc.data());
    //             let data = doc.data();
    //             data.id = doc.id;
    //             cities.push(data)
    //         });
    //         setRoll1(cities)
    //         console.log("Current cities in CA: ", cities);
    //     });









    // const PALL = (e) => {
    //     e.preventDefault();
    // }

    const Present = async (e) => {
        // setPresent1('present')
        // e.preventDefault();


        const koshish = async () => {
            try {
                const docRef = await addDoc(collection(db, roll), {
                    Status: present1,
                    createdOn: serverTimestamp(),
                });
                console.log("Document written with ID: ", docRef.id);
                alert("your presence has been added");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        };
        koshish();

    }
    // console.log(present1);
    const absent = async () => {
        // e.preventDefault()

        try {
            const docRef = await addDoc(collection(db, roll), {
                Status: absent1,
                createdOn: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);
            alert("your presence has been added");
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    }

    const late = () => {
        alert("your late attendence has been added");
    }
    const leave = () => {
        // console.log("your presence has been added");

        let person = prompt("Password is admin",)
        let password = "admin";
        (person === password) ? alert('Leave Added')
            :
            alert("You Have no access to it");
        ;

    }

    const deletePost = async (takeId) => {
        let person = prompt("Password is admin",)
        let password = "admin";
        (person === password) ?
            await deleteDoc(doc(db, roll, takeId))
            :
            alert("You Have no access to it");
        ;
    }

    const updatePost = async (e) => {
        e.preventDefault();

        // Set the "capital" field of the city 'DC'

        await updateDoc(doc(db, roll, isEditing), {
            Lab: Lab,
            Teacher_Name: Teacher,
            Section_Name: Section,
            Class_Timming: Timing

        });
        setEditing(null);
        setTeacher("");
        setSection("");
        setTiming("");

    }


    return (
        <div>
            <form onSubmit={SubmitFormHandler}>
                <div className="Inp">
                    <Form.Label htmlFor="inputPassword5">Roll Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Input your Roll No. "
                        onChange={(e) => { setRoll(e.target.value) }}
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                {/* <input type="text"  name="" id="" /> */}
                <div className="butto">

                    <button type="submit">Enter</button>
                </div>
            </form>

            <div>
                {
                    roll1.map((eachItem, i) => (
                        <div key={i}>
                            {(eachItem.name === undefined) ? null :
                                <div className="main">
                                    <div className="nameImage">
                                        <div className="Name">
                                            <div><span><b>Name </b>:</span>
                                                <span>{eachItem?.name}</span></div>
                                            <div><span><b>Father Name</b>:</span>
                                                <span>{eachItem?.Father_Name}</span></div>

                                        </div>
                                        <div><img height='150px' width='150px'
                                            src={eachItem?.pic} alt="" /></div>
                                    </div>

                                    <div className="cnic">
                                        <div><span><b>Contact No</b>  :</span>
                                            <span>{eachItem?.Contact_No}</span></div>
                                        <div><span><b>Roll No  </b>:</span>
                                            <span>{eachItem?.Roll_No}</span></div>
                                        <div><span><b>CNIC No  </b>:</span>
                                            <span>{eachItem?.CNIC}</span></div>
                                    </div>
                                    <div className="cnic">
                                        <div><span><b>Course Name </b>:</span>
                                            <span>{eachItem?.Course_Name}</span></div>
                                        <div><span><b>Lab </b>:</span><span>
                                            {(eachItem?.id === isEditing) ?
                                                <form onSubmit={updatePost}>
                                                    <input type="text"
                                                        value={Lab}
                                                        placeholder="update Lab"
                                                        onChange={(e) => {
                                                            setLab(e.target.value)
                                                        }}
                                                    />
                                                    <button type="submit">Update</button>
                                                </form>

                                                :
                                                eachItem?.Lab
                                            }


                                        </span></div>
                                        <div><span><b>Teacher Name </b>:</span><span>

                                            {(eachItem?.id === isEditing) ?
                                                <form onSubmit={updatePost}>
                                                    <input type="Update Teacher Name"
                                                        value={Teacher}
                                                        placeholder="Enter Your New Text"
                                                        onChange={(e) => {
                                                            setTeacher(e.target.value)
                                                        }}
                                                    />
                                                    <button type="submit">Update</button>
                                                </form>

                                                :
                                                eachItem?.Teacher_Name
                                            }

                                        </span></div>
                                    </div>
                                    <div className="cnic1">
                                        <div><span><b>Section </b>:</span><span>

                                            {(eachItem?.id === isEditing) ?
                                                <form onSubmit={updatePost}>
                                                    <input type="text"
                                                        min="13"
                                                        value={Section}
                                                        placeholder="Enter Your New Text"
                                                        onChange={(e) => {
                                                            setSection(e.target.value)
                                                        }}
                                                    />
                                                    <button type="submit">Update</button>
                                                </form>
                                                :
                                                eachItem?.Section_Name
                                            }

                                        </span></div>
                                        <div><span><b>Batch No</b>:</span>
                                            <span>{eachItem?.Batch_No}</span></div>
                                        <div><span><b>Timing</b>:</span><span>

                                            {(eachItem?.id === isEditing) ?
                                                <form onSubmit={updatePost}>
                                                    <input type="text"
                                                        value={Timing}
                                                        placeholder="Enter Your New Text"
                                                        onChange={(e) => {
                                                            setTiming(e.target.value)
                                                        }}
                                                    />
                                                    <button type="submit">Update</button>
                                                </form>
                                                :
                                                eachItem?.Class_Timming
                                            }
                                        </span></div>
                                    </div>
                                    <div className="buttonsGroup">
                                        <Button className="butt4" onClick={(e) => { Present(e) }}
                                            as="input" type="button" value="Present" />{'  '}
                                        <Button className="butt4" onClick={() => { absent() }}
                                            as="input" type="button" value="Absent" />{' '}
                                        <Button className="butt4" onClick={() => { late() }}
                                            as="input" type="button" value="Late" />{' '}
                                        <Button className="butt4" onClick={() => { leave() }}
                                            as="input" type="button" value="Leave" />

                                    </div>
                                    <div className="twoButt"><button
                                        onClick={() => {
                                            deletePost(eachItem?.id)
                                        }}>Delete Student Data</button>
                                        <button
                                            onClick={() => {
                                                setEditing(eachItem?.id);
                                                setLab(eachItem?.Lab)
                                                setTeacher(eachItem?.Teacher_Name)
                                                setSection(eachItem?.Section_Name)
                                                setTiming(eachItem?.Class_Timming)
                                            }}
                                        >Edit Student Data</button>


                                    </div>
                                </div>


                            }

                        </div>
                    ))




                }




            </div>





        </div>

    )


}
export default Attendence;