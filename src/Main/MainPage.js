import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from './Header';
import ShowPass from './ShowPass';
import AddPass from './AddPass';
import Profile from './Profile';
function MainPage() {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Routes>
      <Route path="/" element={<ShowPass/>}/>
      <Route path="/addpass" element={<AddPass/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div> 
  );
}

export default MainPage;