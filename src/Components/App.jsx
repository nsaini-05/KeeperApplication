import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Notes from "../notes"



function App()
{
    return <div><Header /> 
    {Notes.map(noteItem =>(
         <Note 
         key = {noteItem.key}
         title = {noteItem.title}
         content = {noteItem.content} />
    ))}
    
    <Footer /></div>
}



export default App;



