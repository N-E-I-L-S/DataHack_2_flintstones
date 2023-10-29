import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import UserLogin from './pages/user/UserLogin';
import DisplayLawyer from './pages/user/DisplayLawyer';
import GetLawyer from './pages/user/GetLawyer';
import OneLawyer from './pages/user/OneLawyer';
import UserProfile from './pages/user/UserProfile';
import UserProfilePage from './pages/user/UserProfilePage';

import Login from './pages/lawyer/Login';
import Profile from './pages/lawyer/Profile';
import ProfilePage from './pages/lawyer/ProfilePage';
import SpeechRecognition from './components/SpeechRecognition';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/user/login' element={<UserLogin/>}/>
        <Route path='/user/displaylawyer' element={<DisplayLawyer/>}/>
        <Route path='/user/getlawyer' element={<GetLawyer/>}/>
        <Route path='/user/onelawyer/:name' element={<OneLawyer/>}/>
        <Route path='/user/profile' element={<UserProfile/>}/>
        <Route path='/user/profilepage' element={<UserProfilePage/>}/>
        
        <Route path='/lawyer/login' element={<Login/>}/>
        <Route path='/lawyer/profile' element={<Profile/>}/>
        <Route path='/lawyer/profilepage' element={<ProfilePage/>}/>

        <Route path='/speech' element={<SpeechRecognition/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
