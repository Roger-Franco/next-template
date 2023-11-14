import React, { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'

export default function Autenticacao() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  return (
    <div>
      <h1>Autenticacao</h1>
      <AuthInput
      label='Email'
      tipo='email'
      valor={email}
      valorMudou={setEmail}
      obrigatorio
      />
      <AuthInput
      label='Senha'
      tipo='password'
      valor={senha}
      valorMudou={setSenha}
      obrigatorio
      />
    </div>
  )
}
