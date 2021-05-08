import { useState } from 'react';
import BlogList from './BlogList';



const Home = () => {

    const [ blogs, setBlogs] = useState([
        {title:'My new website' , body: ' lorem asdasd' , author: 'mayank' , id: 1},
        {title:'welocome party website' , body: ' lorem asdasd' , author: 'nikita' , id: 2},
        {title:'dev tools' , body: ' lorem asdasd' , author: 'mayank' , id: 3}
    ])
    return ( 
        <div className="home">
            
           <BlogList blogs={blogs} title="All Blogs!"/>
           <BlogList blogs={blogs.filter((blog) => blog.author === 'mayank') } title="Mayanks All The Blogs!"/>
         </div>
     );
}
 
export default Home;