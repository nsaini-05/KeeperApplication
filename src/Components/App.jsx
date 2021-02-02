import React, { useState } from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";




function App()
{
    const [notes , addNote] = useState([{"title" : "abc", "content" : "dsf"}]);

    function insertItem(item)
    {
    
        
         addNote(prevValue => {
            return [...prevValue , item];            
        }) 


        console.log(notes);


        
    }



    return <div><Header />
    <CreateArea onCreated = {insertItem}/> 
    {notes.map(item =>{
        return   <Note title = {item.title} content = {item.content} />
    })}
    <Footer /></div>
}



export default App;



