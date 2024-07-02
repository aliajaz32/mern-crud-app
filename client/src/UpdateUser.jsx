import React,{useEffect,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

function UpdateUser(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => { console.log(result)    
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => consoe.log(err))
    },[]  )
    
    const Update = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {name,email,age}  )
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }



    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input  value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder="Enter Name" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input value={age} type="text" onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter Age" className="form-control"/>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    </div>
    )
}
export default UpdateUser;