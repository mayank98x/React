import { useState } from 'react';



const Home = () => {

    const [ blogs, setBlogs] = useState([
        {title:'My new website' , body: ' lorem asdasd' , author: 'mayank' , id: 1},
        {title:'welocome party website' , body: ' lorem asdasd' , author: 'nikita' , id: 2},
        {title:'dev tools' , body: ' lorem asdasd' , author: 'ankita' , id: 3}
    ])
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
           
         </div>
     );
}
 
export default Home;