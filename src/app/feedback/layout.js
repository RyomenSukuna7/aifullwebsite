import '../feedback/page.css';
import Link from 'next/link';
import mainPage from '@/app/page.module.css';

export default function Commons({children}){
    return(
        <>
   <div id='main'>
    <div id={mainPage.navBar} style={{backgroundColor:"blue"}}>
          <div id={mainPage.name}>
            <h3 style={{fontFamily:"Reddit Mono,monospace",width:"900", fontSize:"1.8vw",textWrap:"nowrap"}}><b>Projects</b></h3>
          </div>
          <div className={mainPage.common} id={mainPage.home}>
            <p style={{fontFamily:"Reddit Mono", fontSize:"1.5vw",textWrap:"nowrap"}}><Link style={{textDecoration:"none",color:"black"}} href="/home">Home</Link></p>
          </div>

          <div className={mainPage.common}>
            <p style={{fontFamily:"Reddit Mono", fontSize:"1.5vw",textWrap:"nowrap"}}>Feedback</p>
          </div>

          <div className={mainPage.common} >
            <p style={{fontFamily:"Reddit Mono", fontSize:"1.5vw",textWrap:"nowrap"}}><Link href="#"  style={{textDecoration:"none",color:"black"}}>Admin</Link></p>
          </div>

          <div className={mainPage.common}>
            <p style={{fontFamily:"Reddit Mono", fontSize:"1.5vw",textWrap:"nowrap"}} href="#"><Link href="#"  style={{textDecoration:"none",color:"black"}}>Sign Out</Link></p>
          </div>
       </div>
       {children}
    </div>
          
         
          
        </>
    )
}