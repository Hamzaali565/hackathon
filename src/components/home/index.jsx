import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";
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



const Home = () => {

    const [name, setName] = useState("")
    const [father, setFather] = useState("")
    const [roll, setRoll] = useState("")
    const [contact, setContact] = useState("")
    const [cnic, setCnic] = useState("")
    const [course, setCourse] = useState("")
    const [lab, setLab] = useState("")
    const [timming, setTiming] = useState("")
    const [schedule, setSchedule] = useState("")
    const [teacher, setTeacher] = useState("")
    const [section, setSection] = useState("")
    const [batch, setBatch] = useState("")
    const [pict, setPict] = useState(null)



    const formHandler = async (e) => {
        e.preventDefault();

        const cloudinaryData = new FormData();
        cloudinaryData.append("file", pict);
        cloudinaryData.append("upload_preset", "postingApp");
        cloudinaryData.append("cloud_name", "dozqa9pai");
        // console.log(cloudinaryData);
        axios.post(`https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`,
            cloudinaryData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }

            })
            .then(async res => {

                console.log("from then", res.data);





                try {
                    const docRef = await addDoc(collection(db, roll), {
                        name: name,
                        Father_Name: father,
                        Roll_No: roll,
                        Contact_No: contact,
                        CNIC: cnic,
                        Course_Name: course,
                        Lab: lab,
                        Class_Timming: timming,
                        Class_Schedule: schedule,
                        Teacher_Name: teacher,
                        Section_Name: section,
                        Batch_No: batch,
                        pic: res?.data?.url
                    });
                    console.log("Document written with ID: ", docRef.id);
                    alert("Student Created Successfully")
                } catch (e) {
                    console.error("Error adding document: ", e);
                    alert("Student not created ")
                }
            })
    }


    return (
        <div className="mainomain">

            <div className="main1">
                <h1>Create Student</h1>
                <form onSubmit={formHandler}>
                    <div className="firstThree">
                        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                        <Form.Control

                            type="name"
                            required
                            onChange={(e) => { setName(e.target.value) }}
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Father Name</Form.Label>
                        <Form.Control
                            required
                            type="Name"
                            onChange={(e) => { setFather(e.target.value) }}
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Roll Number</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            onChange={(e) => { setRoll(e.target.value) }}
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <div className="firstThree">
                        <Form.Label htmlFor="inputPassword5">Contact Number</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            id="inputPassword5"
                            onChange={(e) => { setContact(e.target.value) }}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">CNIC Number</Form.Label>
                        <Form.Control
                            type="number"
                            required
                            onChange={(e) => { setCnic(e.target.value) }}
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Course Name</Form.Label>
                        <Form.Control

                            id="inputPassword5"
                            required
                            onChange={(e) => { setCourse(e.target.value) }}
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <div className="firstThree">
                        <Form.Label htmlFor="inputPassword5">Lab Number</Form.Label>
                        <Form.Control
                            required
                            id="inputPassword5"
                            onChange={(e) => { setLab(e.target.value) }}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Class Timing</Form.Label>
                        <Form.Control
                            // type="password"
                            id="inputPassword5"
                            required
                            onChange={(e) => { setTiming(e.target.value) }}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Class Schedule</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            required
                            onChange={(e) => { setSchedule(e.target.value) }}
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <div className="firstThree">
                        <Form.Label htmlFor="inputPassword5">Teacher's Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            required
                            onChange={(e) => { setTeacher(e.target.value) }}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Section Name</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            onChange={(e) => { setSection(e.target.value) }}
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />

                        <Form.Label htmlFor="inputPassword5">Batch Number</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(e) => { setBatch(e.target.value) }}
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <div className="firstThree">
                        <Form.Label htmlFor="inputPassword5">Upload Photo</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            onChange={(e) => {
                                setPict(e.currentTarget.files[0])
                            }}
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <div className="buut">
                        <button type="submit">submit</button>
                    </div>
                </form>



            </div>

        </div>

    )









};
export default Home;