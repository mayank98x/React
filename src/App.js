import logo from './logo.svg';
import './App.css';

function App() {
  const title="Welcome To The New Blog";
  const likes = 50;
  const array=[1,2,3,4,5,6,6];


  return (
    <div className="App">
     <div className="content">
       <h1>{title}</h1>
       <p>Liked {likes} times</p>
       <p>{array}</p>
     </div>
    </div>
  );
}

export default App;
