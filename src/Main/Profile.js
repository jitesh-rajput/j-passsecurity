import { useState } from "react";
import user from './../Home/img/user.png'

const Profile =()=>{
    const [edit,setedit]=useState(false)
    return(
        <div className='bg'>
        <h1 className='text-center text-white py-4'>Profile</h1>
        <div className='row'>
        <div className="col-lg-6 col-sm-12 text-center text-white">
            <img className='img-fluid' src={user} alt="jk"></img>
            <h3>username:- <span className='px-4'>abc</span></h3>
            <h3>email :- <span className='px-4'>abc@gmail.com</span></h3>
        <button type="submit" 
        className="my-3 btn btn-primary"
        onClick={()=>{setedit(!edit)}}
        >
           {edit? "Close": "Edit"}
        </button>
        </div>

        { edit ? 
        <div className='col-sm-10 col-lg-5 text-center m-auto'>
        <div className="form-group py-3">
            <input
            type="username"
            className="form-control"
            aria-describedby="user"
            placeholder="Update Your Username"
            />
        </div>
        <div className="form-group py-3">
            <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Update Your Email"
            />
        </div>
        <div className="form-group py-3">
            <input
            type="password"
            className="form-control"
            id="Password1"
            placeholder="Update Your Password"
            />
        </div>
        <div className="form-group py-3">
            <input
            type="password2"
            className="form-control"
            id="Password2"
            placeholder="Re-Enter-Password"
            />
        </div>   
        <button type="submit" className="btn btn-primary">
            Save
        </button>
            </div>
            : ""}

        </div>        
        </div>
    )
}

export default Profile;