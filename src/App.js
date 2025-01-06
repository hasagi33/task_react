import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [text,setText]=useState('')


  const pythonCode = `# Python code example
def task_timer():
    print("Task Timer in Python")`;

  const csharpCode = `// C# code example
public class TaskTimer {
    public void Run() {
        Console.WriteLine("Task Timer in C#");
    }
}`;

  const javascriptCode = `// JavaScript code example
function taskTimer() {
    console.log("Task Timer in JavaScript");
}`;

  const url='http://localhost:3001/timerRequests';



  const handleSend = () => {
    const body={
      command:text
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials:'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
      }
    }).then(res => res.json())
        .then((jsonres)=>{
          setText(text+jsonres.message)
        })
  };

  const logText=(textArea)=>{
    setText(textArea.target.value)
    console.log(text)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-center-text">
          <p className="course-code">IUS-CS305</p>
          <p className="names">Zijad Helja, Asmin Bašić, Nađa Bučuk</p>
        </div>
        <a href="https://github.com/hzijad/CLI-Task-Timer" className="top-button">Github</a>
        <div className="project-description">
          <p className="title">CLI Task Timer</p>
          <p className="description">
            This project is a web application that showcases a CLI-based Task Timer implemented in three different programming languages: Python, C#, and JavaScript. The website allows users to explore and interact with the Task Timer application in their preferred language. It demonstrates the same functionality across each language, highlighting both versatility and ease of use.
          </p>
        </div>
        <div className="language-buttons">
          <button onClick={() => setCode(javascriptCode)}>JavaScript</button>
          <button onClick={() => setCode(pythonCode)}>Python</button>
          <button onClick={() => setCode(csharpCode)}>C#</button>
        </div>
        <div className="chatboxes">
          <div className="left-chatbox">
            <textarea onInput={logText} placeholder="Write code.."></textarea>
            <button className="send-button" onClick={handleSend}>Send</button>
          </div>
          {/* <textarea readOnly value={code}></textarea> */}
          <div className="left-chatbox">
            <textarea placeholder="Code Output"></textarea>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;