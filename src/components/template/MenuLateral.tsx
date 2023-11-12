import React from 'react'
import MenuItem from './MenuItem'
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons'
import Logo from './Logo'

export default function MenuLateral() {
  return (
    <aside className='flex flex-col'>
      <div className={`
      flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className='flex-grow'>
        <MenuItem url='/' texto='Início' icone={IconeCasa} />
        <MenuItem url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
        <MenuItem url='/notificacoes' texto='Notificacões' icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log('Logout')}
          texto='Sair'
          icone={IconeSair}
          className={`
           text-red-600
           hover:bg-red-400 hover:text-white
          `} 
        />
      </ul>
    </aside>
  )
}
