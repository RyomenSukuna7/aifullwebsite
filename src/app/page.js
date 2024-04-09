"use client"
import mainPage from '@/app/page.module.css';
import Image from "next/image";
import React, {Suspense} from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  let router=useRouter();
  const submitButton=(e)=>{
    e.preventDefault();
    router.push('/feedback');
  }
  return(
    <>
        <div style={{zIndex:-1,position:"fixed",width:"100vw",height:"100vh"}}>
        <Suspense fallback={<p>loding wait ......</p>}>
              <Image src="/mountains.jpg" alt="please check your browers does not support js" layout='fill' objectFit='cover' />
          </Suspense>  
        </div> 
      
        <div id={mainPage.signUpForm}>
          <div id={mainPage.signUpBorder} >
                
            <div id={mainPage.userDetails}>
                <h1 id={mainPage.tileSignUp} style={{cursor:"pointer"}}><b>Sign Up</b></h1>
                    <br/>
              <form id={mainPage.space}> 
                <div id="name">
                    <label className={mainPage.userImage}> <span><Image src='/user.png' width="16" height="16"/></span></label>
                        <input  type="text" className={mainPage.commonInputStyle} placeholder='Full Name'/>
                </div>
                <br/><br/><br/>
                <div id="email">
                    <label className={mainPage.userImage}> <span><Image src='/email.png' width="16" height="16"/></span></label>
                        <input  type="email" className={mainPage.commonInputStyle} placeholder='Email'/>
                </div>
                <br/><br/><br/>
                <div id="password">
                    <label className={mainPage.userImage}> <span><Image src='/password.png' width="16" height="16"/></span></label>
                        <input  type="password" className={mainPage.commonInputStyle} placeholder='Password'/><span className={mainPage.showPassword}><Image src="/showPassword.png" width="20" height="20"/></span>
                </div>
                <br/><br/><br/>
                <div id="reender">
                    <label className={mainPage.userImage}> <span><Image src='/reenterPassword.png' width="16" height="16"/></span></label>
                        <input type="password" className={mainPage.commonInputStyle} placeholder='Reenter password'/>
                </div>
                <div id="submit">
                        <input type="submit" value="Submit" className={mainPage.submitButton} onClick={submitButton}/>
                </div>
              </form>
         </div>

        </div>
      </div>
    </>

  )
}

