import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title="Welcome To The New Blog";
  const likes = 50;
  const array=[1,2,3,4,5,6,6];


  return (
    <div className="App">
      <Navbar/>

    
     <div className="content">
       <Home/>
       <h1>{title}</h1>
       <p>Liked {likes} times</p>
     </div>
    </div>
  );
}

export default App;
