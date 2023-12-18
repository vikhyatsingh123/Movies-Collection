import React from "react"
import { useState } from "react";
import Swal from "sweetalert2";

import "../styles/Suggestion.css"
function Suggestion(){
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const send= (e)=>{
        // e.preventDefault();
        // alert(`Hey ${name}! We have received your suggestion.\n\n Subject:${subject}\n Message:${msg}`);
        e.preventDefault();
        const config={
            Host : "smtp.elasticemail.com",
            Username : "smtp_mail",
            Password : "smtp_password",
            To : 'team_mail_id',
            From : `${email}`,
            Subject : `${subject}`,
            Body : `<br><br> ${msg} <br><br> <strong>Name:<\strong> ${name} <br> <strong>Email:<\strong> ${email}`
        }
        if (window.Email){
            window.Email.send(config)
            .then(
                async message => {
                    if (message==="OK"){
                        await Swal.fire({
                            title: "Success!",
                            text: "Message Sent Successfully!",
                            icon: "success"
                        });
                    }
                    else{
                        await Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    }
                }
            ).then(async (res)=> {
                await window.location.reload()
            }
            )
        }
    }
    return (
        <div>
          
            <div className="contact-form" style={{ padding:"20px"}}>
            <div className="getintouch">
                <h2>Suggest a Movie</h2>
            </div>
            <div className="details">
                <div className="message">
                    <div className="name_email">
                        <input className="inputcss" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input className="inputcss" type="email" placeholder="Email" value={email} onChange={(e)=> setMail(e.target.value)} required />
                    </div>
                    <div className="others">
                        <input  className="inputcss" type="text" placeholder="Movie Name" value={subject} onChange={(e)=> setSubject(e.target.value)} />
                        <textarea className="inputcss"type="text" placeholder="Movie Description..." value={msg} onChange={(e)=> setMsg(e.target.value)} required></textarea>
                        <button type="submit" onClick={send}>Send</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Suggestion;