import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import MyFolders from "./MyFolders";
import Profile from "./Profile";
import Cards from "./Cards";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/login' element={<LogIn />} />
                <Route exact path='/folders' element={<MyFolders />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/folders/folder' element={<Cards />} />
            </Routes>
        </div>
    )
}

export default App;