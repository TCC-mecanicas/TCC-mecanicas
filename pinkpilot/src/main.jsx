import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loja from './Pages/Loja.jsx'
import Sobre from './Pages/Sobre.jsx'
import Comunidade from './Pages/Comunidade.jsx'
import Mecanicas from './Pages/Mecanicas.jsx'
import PinkChat from './Pages/PinkChat.jsx'
import Login from './Pages/Login.jsx'
import Cadastro from './Pages/Cadastro.jsx'
import PageProdutos from './Pages/PageProdutos.jsx' // Importe a página de detalhes do produto

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Mecanicas /> },
        { path: "loja", element: <Loja /> },
        { path: "sobre", element: <Sobre /> },
        { path: "comunidade", element: <Comunidade /> },
        { path: "pinkchat", element: <PinkChat /> },
        { path: "login", element: <Login /> },
        { path: "cadastro", element: <Cadastro /> },
        { path: "produto/:id", element: <PageProdutos /> } // Adicione a rota para detalhes do produto
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
