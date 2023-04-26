import axios from 'axios';
import { useContext, useState } from 'react'
import './PageCSS/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/fontawesome-free-solid';

export default function Write() {
//    const [title,setTitle] = useState("");
   const [desc,setDesc] = useState("");
   const [file,setFile] = useState(null);
   const user = JSON.parse(localStorage.getItem("user"));

   const handleSubmit = async(event)=>{
     console.log("clicked");
     event.preventDefault();
     const newPost = {
       username: user,
       desc
     };
     if(file){
       const data = new FormData();
       const filename = Date.now() + file.name;
       data.append("name",filename);
       data.append("file",file);
       newPost.photo = filename; 
       try{
          await axios.post("http://localhost:5000/upload",data); 
       }catch(err){

       }
     }
     try{
       const res = await axios.post("http://localhost:5000/post",newPost);
        // window.location.replace("/post/"+res.data._id); 
     }catch(err){
         console.log(err);
     }
   };

  return (
    <div className='write container'>
      <div className="write-first">
        {file &&
            <img src ={URL.createObjectURL(file)} alt="" className='writeImage'/>            
        }
      </div>
      <div className="write-second">
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <label for="fileInput">
              {/* <i className="writeIcon fas fa-plus"></i> */}
                  <FontAwesomeIcon icon={faImage} color='white' style={{fontSize:"20px"}}/>
                 <span style={{color:"white",marginLeft:"10px" ,fontSize:"20px",fontFamily:"sans-serif",cursor:"pointer"}}>Add photo</span> 
                </label>
                <input type="file" name='fileInput' id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
            </div>
            <div className="writeFormGroup input_element">
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
          <div className="buttons" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <button className='writeSubmit' type="submit">Publish</button>
            </div>
        </form>
      </div>
      
    </div>
  )
}
