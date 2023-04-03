import React from 'react' //apesar de não ser chamado em nenhum local do código, essa importação é
//necessária porque estamos lidando com jsx

import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
