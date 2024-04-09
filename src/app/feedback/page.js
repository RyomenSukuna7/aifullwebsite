import FormDetails from "./name-email-contact-message"
export default function Feedback(){
    return(
       <>

<div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span className="kick">CONTACT</span>
            <span className="kick">US</span>
          </div>
        </div>
        <div className="screen-body-item">
           <div className="app-form">
                 <FormDetails/>
          
          <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

       </>
    )
}

export let metadata={
  title:"Feedback",
  description:"Please give you opnion"
}