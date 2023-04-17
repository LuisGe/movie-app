import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import Detail from "./pages/Detail";
import Prefers from "./pages/Prefers";

function App (){
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/prefers" element={<Prefers/>}/>
                <Route exact path="detail/:movieID" element={<Detail/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    )
}
// class App extends React.Component {
//     render(){
//         return (
//         )
//     }
// }

export default App;
