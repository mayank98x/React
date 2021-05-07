import { useState } from 'react';



const Home = () => {

    const [name, setName] = useState('mayank');

    const handleClick = () => {
        setName('nirmal');
        setAge(30);
    }

    const [age,setAge] = useState(25);


    return ( 
        <div className="home">
            <h2>Home page</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>CLick me</button>
         </div>
     );
}
 
export default Home;