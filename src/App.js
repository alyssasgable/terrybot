import logo from './logo.svg';
import {useState, useEffect} from 'react';

const App = () => {
    const [ value, setValue] = useState(null)
    const [ message, setMessage] = useState(null)
    const [ previousChats, setPreviousChats] = useState([])
    const [ currentTitle, setCurrentTitle] = useState(null)

    const createNewChat = () => {
      setMessage(null)
      setValue("")
      setCurrentTitle(null)
    }

    const handleClick = (uniqueTitle) => {
      setCurrentTitle(uniqueTitle)
      setMessage(null)
      setValue("")
    }

    const getMessages = async () => {

      const options = {
        method: "POST",
        body: JSON.stringify({
            message: value
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      
      try {
       const response = await fetch('http://localhost:8000/completions', options)
      //  const response = await fetch('      terrybotbackend-production.up.railway.app/completions', options)

       const data = await response.json()
       setMessage(data.choices[0].message)

      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {

      if (!currentTitle && value && message) {
        setCurrentTitle(value)
      }
      if (currentTitle && value && message ) {
        setPreviousChats(prevChats => (
          [...prevChats,
            {
              title: currentTitle,
              role: "role",
              content: value
            },
            {
              title: currentTitle,
              role: message.role,
              content: message.content
            }
          ]
        ))
      }
        //eslint-disable-next-line
    }, [message, currentTitle])

    const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
    const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)))

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat} className="button">+ New Chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => <li key={index} onClick={() => handleClick({uniqueTitle})}>{uniqueTitle}</li>)}
        </ul>
        <nav>
          <p>Made By The Culture</p>
        </nav>
      </section>

      <section className="main">
        <div className="header">
          <img className="logo" alt='Logo of a robot' src={logo} />
          <h1>Sally</h1>
        </div>
       
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => <li key={index}>
            <p className="role">{chatMessage.role}</p>
            <p>{chatMessage.content}</p>
          </li>)}
        </ul>

        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange= {(e) => setValue(e.target.value)}/>
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