import ReactMarkdown from "react-markdown";
import React, { useState } from "react";

const Blogs = () => {
    const changeHandler = (e) => {
        setInput(e.target.value);
    };
  
    const [input, setInput] = useState(" ");
  
    return (
      
      <div className="container">
        <h1 classname="name">Start writing your blogs!!</h1>

        <textarea autoFocus className="textarea" value={input} onChange={changeHandler} />
        <ReactMarkdown children={input} className="markdown" />
      </div>
    );
  };
  
  
  
  export default Blogs;

  


