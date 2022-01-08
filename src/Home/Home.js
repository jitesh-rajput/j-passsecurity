import logo from '../Home/img/img1.png'
import encreption from '../Home/img/encrypted.png'
import salt from '../Home/img/salt.png'
import free from '../Home/img/free.png'
import { Link } from 'react-router-dom'
const Home=()=>{
    return(
        <div className="home-bg container-fluide">
        <div className="text-center py-5">
            <h1>Secure Your Password's</h1>
            <h1>with</h1>
            <h1 style={{color:'rgb(26, 236, 250)'}}>J-Passecurity</h1>
        </div>
        <div className='text-center py-5'>
        <Link className='btn px-5' to="/login" >Lets'Go</Link>
        </div>
        <div className="container">
        <div className='row py-3'>
        <div className="col-lg-6 col-sm-12 text-center">
            <img className='img-fluid' src={logo} alt="jk"></img>
        </div>
        <div className='col-lg-6 col-sm-12 align-self-center'>
        <h1 style={{color:'rgb(26, 236, 250)'}}>We are Humen not Robots !</h1>
        <h3>Remebering password of different websites are not easy for us. 
        nd Using the Same Password for all websites are not good idea</h3>
        <h3>So</h3>
        <h1 style={{color:'rgb(26, 236, 250)'}}>J-Passecurity</h1>
        </div>
        </div>
        </div>

        <div className='container'>
        <h1 className='text-center py-3' style={{color:'rgb(26, 236, 250)'}}>Feature's</h1>
        <div className='row py-5'>
            <div className='col-lg-4 col-sm-10 text-center feature'>
            <img className='img-fluid py-3' src={encreption} alt="Encreption" width={200}></img>
                <h1> Strong Encreption </h1>
            </div>
            <div className='col-lg-4 col-sm-10 text-center feature'>
            <img className='img-fluid py-3' src={salt} alt="Salt" width={200}></img>
                <h1> Add Salt To Hash </h1>
            </div>
            <div className='col-lg-4 col-sm-10 text-center feature'>
            <img className='img-fluid py-3' src={free} alt="Free" width={200}></img>
                <h1> Free To Use </h1>
            </div>
        </div>
        </div>

        <div className='container'>
        <footer className="home-footer-bg text-center text-lg-start">
            <div className="text-center">
               <p> © 2021 Copyright:
               Developed By <p style={{color:'rgb(26, 236, 250)'}}>Jitesh Rajput</p> </p>
            </div>
        </footer>
        </div>

        </div>
        
    );
}

export default Home;