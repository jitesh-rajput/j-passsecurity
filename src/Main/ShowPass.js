import { FaEyeSlash ,FaEye,FaRegEdit,FaTrash ,FaSave} from "react-icons/fa";
import { useState } from "react";


const ShowPass=()=>{

  const [hpass,sethpass]=useState(false);
  const [edit,setedit] =useState(false);
  const [npass,nsetpass]=useState('');
  const [save,setsave]=useState(false);
  return(
      <div className="bg overflow-auto">
      <div className="container">
      <h1 className="text-center py-5 text-white">Passwords</h1>

      <div className="row m-auto">

      <div class="col-sm-12 col-lg-4 py-2">
      <div className="card">
      <div class="card-header text-center">
        www.google.com
      </div>
      <div class="card-body">
        <h5 class="card-title">Password :- <span>{npass}</span></h5>
      {edit ?
      <div class="form-group p-2">
        <label for="npass">Enter New Password</label>
        <input type="password" 
        class="form-control" 
        id="npass" 
        placeholder="Password" 
        name="npass"
        onChange={(e)=>nsetpass(e.target.value)} 
        value={npass}
        /> 
      </div> : <div></div>
      }
      <div className="text-center">
      {
        hpass ? <span><FaEye size={25} color="blue" className=" mx-4" onClick={()=>sethpass(!hpass)}/></span>
        :       <span><FaEyeSlash size={25} className=" mx-4" onClick={()=>sethpass(!hpass)}/></span>
      }
        
        <span><FaRegEdit size={25} className="mx-4" onClick={()=>setedit(!edit)}/></span>
        <span><FaSave size={25} color="green" className="mx-4"/></span>
        <span><FaTrash size={25} color="red" className="mx-4"/></span> 
      </div>
      </div>
      <div class="card-footer text-muted text-center">
        Last Updated On 25/07/2003
      </div>
      </div>
    </div>
    

    </div>

      </div>
      </div>
  )
  }
  
  export default ShowPass;