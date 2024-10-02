import { useState } from 'react'

import Perfil from './components/Perfil/index.jsx'
import Formulario from './components/formulario/index.jsx'
import ReposList from './components/ReposList/index.jsx'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}  />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeDoUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    </>
  )
}

export default App
