import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import { useState } from 'react';
import LogIn from './components/LogIn';



function App() {

  const [balance, setBalance] = useState(14568.27)

  const [currentUser, setCurrentUser] = useState({
    userName:'bob_loblaw',
    memberSince: '08/23/99',
  })

  function mockLogIn(logInInfo){
    const newUser = {currentUser}
    newUser.userName = logInInfo.userName
    setCurrentUser(newUser)
  }

  

  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home balance={balance}/>}/>
        <Route path ="/userProfile" element = {<UserProfile userName ={currentUser.userName} memberSince = {currentUser.memberSince}/>}/>
        <Route path ="/LogIn" element = {<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
