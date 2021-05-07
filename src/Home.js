const Home = () => {

    const handleClick = () => {
        console.log('hello, mayank');
    }

    const handleClickAgain = (name) =>
    {
        console.log('Hello'+ name);
    }

    return ( 
        <div className="home">

            <h2>Home page</h2>
            <button onClick={handleClick()}>CLick me</button>
            <button onClick={() => {
                handleClickAgain('mayank')
            }}>CLick me Again</button>
 </div>
     );
}
 
export default Home;