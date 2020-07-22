import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  // useEffect(async () => {

  //   const api = await fetch('https://api.github.com/users/MHuzaifaKhan97/repos')
  //   const data = await api.json();

  //   console.log(data);
  //   // fetch('https://jsonplaceholder.typicode.com/posts')
  //   //   .then(response => response.json())
  //   //   .then(json => setData(json))

  // }, [])

  // or

  useEffect(() => {
    
    async function getRepos() {
      const api = await fetch('https://api.github.com/users/MHuzaifaKhan97/repos')
      const data = await api.json();
      setRepos(data);
      console.log(repos.name);
    }
    getRepos();
    
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => setData(json))

  }, [])

  console.log("Data: " + repos);
  return (
    <div className="App">
      <h1>Hello World From all of us </h1>
      <h2>
        <ul>
          {repos.map((repo,index) => {
            return <li key={index} className="lists">{repo.name}</li>
          })}
        </ul>
      </h2>
    </div>
  );
}

export default App;
