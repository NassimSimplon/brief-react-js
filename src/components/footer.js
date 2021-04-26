import React from 'react'
import { Button } from "react-bootstrap";
import "react-bootstrap";
import './footer.css'

const Footer = () => {
    return(
        <div className="mt-5">
            <div className="container mt-5">
                <p className="mt-5 footer-tit">Sounds interesting? Join us now!</p>
                <Button className="primary mt-2" size="md" >SEE ALL CURRENT OPENINGS</Button>
                </div>
<br/><br/><br/>
            <hr/>

            <div className="container mt-5">
                <p className="footer-p "> We are leaders in 11 countries: <span className="span">  Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil, Argentina, Peru </span> and <span className="span">Chile</span> </p>
           <p className="footer-p text-center">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/>

www.docplanner.com © 2021</p>
            </div>
         </div>
    )
}

export default Footer