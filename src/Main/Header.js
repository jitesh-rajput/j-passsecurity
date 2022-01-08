import logo from '../Home/img/shield.png'
import { FaUserCircle ,FaLock,FaFolderPlus,FaSignInAlt} from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';

      
const Header =()=>{
    const [drop, setDrop] = useState("collapse");
    const setDropDown=()=>{
        if(drop=="collapse"){
            setDrop("")
        }
        else{
            setDrop("collapse")
        }
    }
    const d="collapse"
    return (
        <div>          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <img className='navbar-logo img-fluid' src={logo} width={50}/>
                <p className="navbar-brand m-auto mx-3">J-passecurity</p>   
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setDropDown()}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={ `${drop} navbar-collapse`}id="navbarResponsive">
            <ul className="block navbar-nav ms-auto text-center">
                <li className="nav-item mx-5 active">
                <Link className="nav-link" to="/home"><FaLock size={25} className="mx-2" color='white'/>Passwords</Link>
                </li>
                <li className="nav-item mx-3">
                <Link className="nav-link" to="/home/addpass"> <FaFolderPlus size={25} className="mx-2"/>Add Passwords</Link>
                </li>
                <li className="nav-item mx-3">
                <Link className="nav-link" to="/home/profile"><FaUserCircle size={25} className="mx-2"/>Profile</Link>
                </li>
                <li className="nav-item mx-3">
                <a className="nav-link" href="#"> <FaSignInAlt size={25} className="mx-2"/>LogOut</a>
                </li>
            </ul>
            </div>
            </nav>
  </div>
    )
  }
  
  export default Header;
