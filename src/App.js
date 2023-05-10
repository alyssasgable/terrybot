import logo from './logo.svg';

const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button className="button">+ New Chat</button>
        <ul className="history"></ul>
          <li>
            Test
          </li>
        <nav>
          <p>Made By The Culture</p>
        </nav>
      </section>

      <section className="main">
        <img className="logo" src={logo} />
        <h1>terryGPT</h1>
        <ul className="feed"></ul>

        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">➢</div>
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
