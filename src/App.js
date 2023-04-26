import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import RemoteWork from "./RemoteWork/RemoteWork";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import AboutMe from './AboutMe/AdbouMe';
import { useState } from 'react';

function App() {
   const [primeryColor, setPrimeryColor] = useState('#50BEC2')
   const [editMode, setEditMode] = useState(false)
   
   const ChangeColor = (color) => {
       setPrimeryColor(color)
   }
   const onClickHandler = () => {
    setEditMode(!editMode)
   }

    return (
        <div className="App">
           <Header onClick={onClickHandler} editMode={editMode} ChangeColor={ChangeColor}/>
            <Main PrimeryColor={primeryColor}/>
            <AboutMe PrimeryColor={primeryColor}/>
            <Skills/>
            <Projects PrimeryColor={primeryColor}/>
            <RemoteWork PrimeryColor={primeryColor}/>
            <Contacts PrimeryColor={primeryColor}/>
            <Footer/>
        </div>
    );
}

export default App;
