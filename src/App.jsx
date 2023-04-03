import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [repos, setRepos] = useState ([])
  const [search, setSearch] = useState('')
  
  //remember: useffect tem 2 argumentos. quando a variável do 2 arg mudar, executa a fç do 1 arg
  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
    .then(resposta => resposta.json())
    .then(dados => setRepos(dados)) // um vetor aonde cada elemento é um objeto
  }, [])   //pelo 2 arg ser [], essa fç é executada assim que carrega a página

  const filteredRepos = search.length ?
    repos.filter(elemento => elemento.name.includes(search)) : [];

  return (
    <div className="App">
      
      <input 
        type="text" 
        name='search'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='Buscar...' 
      />
      
      { search.length > 0 ? 
        (
          <ul>
          {
            filteredRepos.map(elemento => {
              return(
                <li key={elemento.id}>{elemento.name}</li>
              )
            })
          }
          </ul>  
        ) : 
        (
          <ul>
          {
            repos.map(elemento => {
              return(
                <li key={elemento.id}>{elemento.name}</li>
              )
            })
          }
          </ul>
        )
      }
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App