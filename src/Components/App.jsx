import React, { useState } from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";




function App()
{
    const [notes , setNotes] = useState([{"title" : "abc", "content" : "dsf"}]);

    function insertItem(item)
    {
    
        
        setNotes(prevValue => {
            return [...prevValue , item];            
        }) 


        
    }

    


    function deleteItem(itemIndex)
    {
        setNotes(prevValue=>{
           return prevValue.filter((element , index)=>{
               return index!== itemIndex;
           })
        })
    }



    return <div><Header />
    <CreateArea onCreated = {insertItem}/> 
    {notes.map((item ,index) =>{
        return   <Note title = {item.title} content = {item.content} key = {index} id = {index} delete = {deleteItem} />
    })}
    <Footer /></div>
}



export default App;



