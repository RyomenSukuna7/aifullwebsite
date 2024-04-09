"use client"
import { useState } from "react"
export default function FormDetails(){

    let [name,setName]=useState(" ");
    let [email,setEmail]=useState(" ");
    let [contact,setContact]=useState(" ");
    let [message,setMessage]=useState(" ");
    return(

        <>
           <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" onChange={(e)=>setContact(e.target.value)}/>
            </div>
            <div className="app-form-group message">
              <textarea className="app-form-control" placeholder="MESSAGE" onChange={(e)=>setMessage(e.target.value)}/>
            </div>
        </>
    )
}