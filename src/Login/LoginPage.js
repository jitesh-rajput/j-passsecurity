import Header from '../Home/Header';
import Login from './Login';
import Footer from './Footer';

function LoginPage() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Login/>
      <Footer/>
    </div> 
  );
}

export default LoginPage;
