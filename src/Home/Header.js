import logo from './img/shield.png'
const Header =()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
              <div className="container-fluid">
              <img className='navbar-logo img-fluid' src={logo} width={50}/>
                <p className="navbar-brand m-auto">J-passecurity</p> 
              </div>
            </nav>
        </div>
    )
  }
  
  export default Header;