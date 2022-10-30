import React,{useState} from 'react'

import style2 from './LoginPage.module.css';
import profile from './profile2.webp';
import email from './email.jpg';
import pass from './pass.png';
import axios from "axios"
import {useHistory} from "react-router-dom"
function LoginPage(){

    const history = useHistory();
    const [userEmail,setUserEmail]=useState('');
    const [userPassword,setUserPassword]=useState('');

    const submitHandler = async(e) => {
      e.preventDefault();
      const res = await axios.get(`http://localhost:4000/users?email=${userEmail}&password=${userPassword}`);

      if(res.data.length > 0)
      {
        history.push("/home/"+res.data[0].id);
      }
      else
      {
        alert("User does not exist. Please Register")
      }
    }

    
  return (
    <div className={style2.main}>
     <div className={style2.sub_main}>
       <div>
         <div className={style2.imgs}>
           <div className={style2.container_image}>
             <img src={profile} alt="profile" className={style2.profile}/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>

        <form onSubmit={submitHandler}>
      
           <div>
            
             <img src={email} alt="email" className={style2.email}/>
             <input type="text" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} placeholder="email" className={`${style2.name} ${style2.inputstyle}`} />
           </div>

           <div className={style2.second_input}>
             <img src={pass} alt="pass" className={style2.email}/>
             
             <input type="password"  value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}} placeholder="password" className={`${style2.name} ${style2.inputstyle}`} />
           </div>

          <div className={style2.login_button}>
          <button type='submit' className={style2.buttonstyle}>Login</button>
          </div>
           
            <p className={style2.link}>
              <a href="">Forgot password ?</a> Or<a href="">Sign Up</a>
            </p>

            </form>

            {/* <h2>{JSON.stringify(userPassword)}</h2> */}
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginPage;