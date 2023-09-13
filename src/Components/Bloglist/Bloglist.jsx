import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types';

const Bloglist = ({handleBookmark,handleRead}) => {

    const [blogs,setBlogs] = useState([]);
    
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

    

    return (
        <div className="w-fit">
            {
                blogs.map(blog=><Blog 
                    handleRead={handleRead} 
                    handleBookmark={handleBookmark} 
                    key={blog.id} 
                    blog={blog}
                />)
            }
        </div>
    );
};

export default Bloglist;

Bloglist.propTypes = {
    handleBookmark : PropTypes.func.isRequired,
    handleRead : PropTypes.func.isRequired,
}