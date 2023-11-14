import Link from 'next/link'
import React from 'react'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props:AvatarUsuarioProps) {
  const {usuario} = useAuth()
  return (
    <Link href="/perfil">
      <img 
      src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
      alt="Avatar do Usuário" 
      className={`
      h-10 w-10 rounded-full cursos-pointer
      ${props.className}
      `}
      />
    </Link>
  )
}
