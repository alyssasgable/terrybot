import logo from './logo.svg';

const App = () => {
  
    const getMessages = async () => {

      const options = {
        method: "POST",
        body: JSON.stringify({
            message: "My mic sounds nice check 2"
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      
      try {
       const response = await fetch('http://localhost:8000/completions', options)
       const data = await response.json()
       console.log(data)

      } catch (error) {
          console.error(error)
      }
    }
  return (
    <div className="app">
      <section className="side-bar">
        <button className="button">+ New Chat</button>
        <ul className="history"></ul>
          <li>
            History ...
          </li>
        <nav>
          <p>Made By The Culture</p>
        </nav>
      </section>

      <section className="main">
        <div className="header">
          <img className="logo" src={logo} />
          <h1>terryGPT</h1>
        </div>
       
        <ul className="feed"></ul>

        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit" onClick={getMessages}> ➢</div>
          </div>
          <p className="info">
            Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts from events after 2021. 
            ChatGPT May 4
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;
