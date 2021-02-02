import React , {useState} from "react";




function CreateArea(props) {

    const [item , setItem] = useState({title : "" , content : ""});

    function handleChange(event){

        const inputName = event.target.name;
        const newValue = event.target.value;
       
        setItem(prevValue => {
            return{...prevValue , [inputName] : newValue};
        })
    
    }
    
    
    function handleClick(event){
        
       

        props.onCreated(item);
        event.preventDefault();
        setItem({title : "" , content : ""});
    

         
    }




  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange = {handleChange} value = {item.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" value = {item.content} onChange = {handleChange}/>
        <button onClick = {handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
