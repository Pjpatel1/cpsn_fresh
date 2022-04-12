import "../forms/regform.css";
import axios from "axios";
import  React, {useState} from 'react';
function Regform()
{
    const [fname,setFname] = useState(null);
    const [lname,setLname] = useState(null);

    
    
    const PostData = async (e) =>
    {
        
       const json = JSON.stringify({
           fname:fname,lname:lname}
           )
        
        axios.post('http://127.0.0.1:5008/register', json, {
            headers: {
              'Content-Type':'application/json'
            }
          })
            .then(response => {
              console.log(response.data);
            });   
         
            
    
        }
    return(
        <>
          <div className="form-heading">
                    SERVICE REGISTRATION
            </div>
                <div className='blur'>
                        <div className='basics'>
                            <div className='sinputs'>
                                <label className="label">First Name</label>
                                <input type="text" id="fname" name="fname" onChange={(e)=>{
                                    setFname(e.target.value)
                                    console.log(fname);
                                }} placeholder="First Name" className='name'></input>
                            </div>
                            <div className='sinputs'>
                                <label className="label">Last Name</label>
                                <input type="text" id="Lname" name="Lname" onChange={(e)=>{
                                    setLname(e.target.value)
                                    console.log(lname)
                                }}  placeholder="Last Name" className='name'></input>
                            </div>
                            <div className='sinputs'>
                                <label className="label">Eneter phone number:</label>
                                <input 
                                type="tel"
                                id="phone" 
                                name="phone" 
                                placeholder="123-45-678"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                 className="phone"></input>
                            </div>
                        
                            <div className='sinputs' >
                                <label for="email" className="label">Enter your email:</label>
                                <input type="email" id="email" name="email" placeholder='Enter email' className='email'></input>
                            </div>
                        </div>
                        <div className='firm-details'>
                            <div className='label1'>
                                Enter company details below
                            </div>
                            <div className='sinputs'>
                                <label for="name-firm" className='label2'>Company Name</label>
                                <input type="text" id="company-name" name="company-name"  placeholder=" Eneter the Name of your comapany" className='company-name' ></input>
                            </div>
                            <div className='sinputs'>
                                <label for="address-firm" className='label2'>Address of the firm</label>
                                <textarea type="text" id="addresss" name="address"  placeholder=" Eneter the address of your comapany" rows="10" cols="20" className='txtarea'></textarea>
                            </div>
                            <div className='sinputs'>
                                <input type="file" id="myFile" name="filename" className='label3'></input>
                                <button  className='submit' placeholder='upload' >Upload</button>
                            </div>
                        </div>
                    <div className='sinputs'>
                        <select className='dropdown'>
                                <option value="" selected disable>-- Select your Services --</option>                    
                                <option value="Information-Technology">Information-Technology</option>
                                <option value="Lawyer">Lawyer</option>
                                <option value="C.A">C.A</option>
                                <option value="othe">Other</option>
                        </select>
                        <div className='sinputs' st >
                            <textarea rows="10" cols="44"></textarea>
                        </div>
                        <input type="submit" className='submit1' onClick={PostData}></input>
                    </div>
                </div> 
        </>
    )
}
export default Regform