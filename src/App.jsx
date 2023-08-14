

import './App.css';
import NavBar from './Compunents/NavBar';
import AddDental from './Pages/AddDental';
import BasicInfo from './Pages/BasicInfo';
import Dashboard from './Pages/Dashboard';
import Dental1 from './Pages/Dental1';
import ForgetPassword from './Pages/ForgetPassword';
import ForggotPassword from './Pages/ForggotPassword';
import Home from './Pages/Home';
import HorseDetail from './Pages/HorseDetail';
import Horses from './Pages/Horses';
import ResetPassword from './Pages/ResetPassword';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 




function App() {

  return (
    <>
  
      <Router>
      <NavBar/>
      {/* <Dental1/> */}
      <AddDental/>
        <div>
      
          <Routes>
            
            {/* <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForggotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/horses' element={<Horses/>}/>
            <Route path='/basicInfo' element={<BasicInfo/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/horsedetail' element={<HorseDetail/>}/> */}
            




            




     
            {/* <Route path='/About' element={<About/>} />
        
            <Route path='/Contact' element={<CardList/>} />
            <Route path='/detail/:name' element={<Aptech/>} />
            <Route path='/web' element={<Web/>}/>
            <Route path='/graphicdesigning' element={<GraphicDesigning/>}/>
            <Route path='/digitalmarkiter' element={<DigitalMarkiting/>}></Route>
            <Route path='/signIn' element={<SignIn/>}></Route> */}

            {/* <Footer/> */}
        
       
       
      
          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
