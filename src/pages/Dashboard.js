import { collection,getDoc,getDocs } from "firebase/firestore";
import { useEffect,useState } from "react";
import { db } from "../Firebase/Firebase";
import {auth} from "../Firebase/Firebase";
const Dashboard=()=>
{
    const[blogs,setBlogs]=useState([]);
    const collectionsRef=collection(db,"posts");
    let data={};
    const getPosts=async()=>{
        data=await getDocs(collectionsRef);
        let blogs=(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        setBlogs(blogs);
    };
    useEffect(()=>{
        getPosts();
    },[]);
    return(<>
    {
        blogs.map((blogs)=>{
            return (
                <>
                      <div className="blog_container">
                        <h2 >{blogs.title}</h2>
                        <p >{blogs.blog_text}</p>
                        <div className="content">
                            <b >Author : {blogs.author.name}  Date : {blogs.author.date_publish}</b>
                        </div>
                    </div>
                </>
            );

        })
    }</>)
}
export default Dashboard;