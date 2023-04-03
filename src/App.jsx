import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import api from './services/api'
import './App.css'
import './styles/AppStyle.css'

function App() {

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({});
  //nome do estado, função pra trocar o valor do estado - passar um valor novo e o argumento do useState será o valor inicial  

  const handleClick = async () => {

    if(!cep){
      alert("Você deve preencher o campo cep com algum dado.")
      return;
    }

    try {
      var consulta = await api.get(cep + "/json")
      //const resposta = JSON.stringify(consulta.data)
      setEndereco(consulta.data)
      setCep("");
    } 
    catch (error) {
      alert("Houve um erro ao pesquisar o CEP digitado.")
      setCep("")
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>
      <div className="containerInput">
        <input 
          type="text"
          placeholder='Digite seu CEP'
          value={cep}   /* o valor desse input estará sempre atrelado ao estado */
          onChange={ (evento) => setCep(evento.target.value) }
        />
        <button className="buttonSearch" onClick={handleClick}>
          <FiSearch size={20} color="black" />
        </button>
      </div>
      
      {Object.keys(endereco).length > 0 && (
        <main className="main">
          <h2 id="h2Cep">CEP: {endereco.cep}</h2>
          <p id='pRua'>Rua: {endereco.logradouro}</p>
          <p id='pComp'>Complemento: {endereco.complemento}</p>
          <p id='pBairro'>Bairro: {endereco.bairro}</p>
          <p id='pCidade'>{endereco.localidade} - {endereco.uf}</p>
        </main>
      )}
    </div>
  )
}
//RENDERIZAÇÃO CONDICIONAL - SE HOUVER MAIS DE UMA CHAVE NO OBJETO ENDEREÇO ENTÃO
//ELE RENDERIZA O COMPONENTE MAIN
export default App