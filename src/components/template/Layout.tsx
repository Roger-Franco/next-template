import React from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  return (
    // <div className={`dark flex h-screen w-screen`}>
    <div className={`flex h-screen w-screen`}>
      <MenuLateral />
      <div className={`dark:bg-gray-800 flex flex-col w-full p-7 bg-gray-300`}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>
          {props.children}
        </Conteudo>
        <div className='dark:text-red-900'>hello world</div>
      </div>
    </div>
  )
}
