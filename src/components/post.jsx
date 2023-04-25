
import {Link} from "react-router-dom";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
     {post.photo &&(
      <img src={PF + post.photo} id="postimg" alt="" />
     )}
      <div className="postInfo">
          
              <hr />
              <span className="postDate">{new Date(post.createdAt).toDateString}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  )
}
