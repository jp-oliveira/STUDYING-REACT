import { useState } from 'react'
import './App.css'
import Primeiro     from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos    from './components/ComFilhos'
import Card         from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Card titulo="Componente com Filhos">
        <ComFilhos>
          <ul>
            <li>Primeiro Item</li>
            <li>Segundo Item</li>
            <li>Terceiro Item</li>
            <li>Quarto Item</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="Componente com Parâmetros">
        <ComParametro
          titulo="meu título"
          subtitulo="meu subtítulo"
        />
      </Card>

      <Card titulo="Primeiro exercício">
        <Primeiro/>
      </Card>

      <Card titulo="Exercício de Repetição">
        <Repeticao/>
      </Card>

      <Card titulo="Exercício de Condicional">
        <Condicional numero={10}/>
        <Condicional numero={7}/>
      </Card>

    </div>
  )
}

export default App