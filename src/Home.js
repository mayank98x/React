import { useState, useEffect } from 'react';
import BlogList from './BlogList';



const Home = () => {

    const [ blogs, setBlogs] = useState([
        {title:'My new website' , body: ' lorem asdasd' , author: 'mayank' , id: 1},
        {title:'welocome party website' , body: ' lorem asdasd' , author: 'nikita' , id: 2},
        {title:'dev tools' , body: ' lorem asdasd' , author: 'mayank' , id: 3}
    ])

    const [name, setName] = useState('mario');

     const setDelete = (id) => {
        console.log("Id is working",id);
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("USEEFFECT is name",name);
    },[name]);
    return ( 
        <div className="home">
            
           <BlogList blogs={blogs} title="All Blogs!" setDelete={setDelete}/>
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mayank') } title="Mayanks All The Blogs!"/> */}
            <button onClick={()=> setName('shawn')}>Change Name</button>
            <p>{name}</p>
         </div>
     );
}
 
export default Home;