import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome_form, setNomeForm] = useState("");
  const [email_form, setEmailForm] = useState("");
  const [senha_form, setSenhaForm] = useState("");

  /* ALTERNATIVA AO USO DE UM ESTADO PARA CADA VARIÁVEL É UM OBJETO */
  const [loginState, setLoginState] = useState ({
    email2:"",
    senha2:"",
  })

  const [busca_form, setBuscaForm] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault(); //prevent from resubmit 
    console.log({nome_form, email_form, senha_form})
  }

  const handleOnChangeForm2 = (event, attr) => {
    setLoginState({...loginState, [attr]: event.target.value})
  }

  const handleSubmitForm2 = (event) => {
    event.preventDefault(); //prevent from resubmit 
    console.log(loginState)
  }

  useEffect(() => {
    if(busca_form.length > 0){
      console.log(`Posso fazer uma busca pois '${busca_form}' é maior do que zero`)
    }
  }, [busca_form])
  const handleSubmitForm3 = (event) => {
    event.preventDefault(); //prevent from resubmit 
    console.log(busca_form)
  }

  return (
    <div className="App">
      
      <form onSubmit={handleSubmitForm} className='form' action="" method="post">
        <h1>Formulário de Cadastro</h1>
        <input 
          value={nome_form}
          onChange={(e) => setNomeForm(e.target.value)}
          type="text"
          placeholder='Nome Completo'
          required 
          name="nome_form"
          id="nome_form"
        />
        <input
          value={email_form}
          onChange={(e) => setEmailForm(e.target.value)}
          type="email"
          placeholder='Email'
          required
          name="email_form"
          id="email_form"
        />
        <input
          value={senha_form}
          onChange={(e) => setSenhaForm(e.target.value)}
          type="password"
          placeholder='Senha'
          required
          name="senha_form"
          id="senha_form"
        />
        <button type='submit'>
          Enviar
        </button>
      </form>

     {/* ESSE 2 FORM É UM EXEMPLO DE SUBMIT NÃO COM UMA VARIAVEL STATE PARA CADA INPUT E SIM UM OBJETO */}
      <form onSubmit={handleSubmitForm2} action="" className="form">
        <h1>Formulário de Envio</h1>
        <input 
          type="email"
          placeholder='Email'
          name="email_form_2" 
          id="email_form_2"
          value={loginState.email2}
          onChange={(e) => handleOnChangeForm2(e,'email2')}
        />
        <input
          type="password"
          placeholder='Senha'
          name="senha_form_2"
          id="senha_form_2"
          value={loginState.senha2}
          onChange={(e) => handleOnChangeForm2(e,'senha2')}
        />
        <button type='submit'>
          Entrar
        </button>
      </form>

      <form onSubmit={handleSubmitForm3} action="" className="form">
        <h1>Formulário de Busca</h1>
        <input 
          type="text"
          placeholder='Digite sua busca'
          name="busca_form_3"
          id="busca_form_3"
          value={busca_form}
          onChange={(e) => setBuscaForm(e.target.value)}
        />
      </form>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </div>
  )
}

export default App
