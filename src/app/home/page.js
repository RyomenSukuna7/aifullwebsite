import Design from './patical.js';
import Header from './header.js';
export default function MainPage(){
    return(
       <div>
            <div id="homeMainTitles">
                <Header/>
            </div>
            <div>
                <Design/> 
            </div>
       </div>
    );
}

export let metadata={
    title:"main page",
    description:"main page of portfolio"
}