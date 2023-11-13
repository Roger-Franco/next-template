import { createContext, useState } from 'react';

type Tema = 'dark' | ''

interface AppContextProps {
  // tema: string
  tema?: Tema
  alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
  const [tema, setTema] = useState<Tema>('dark')

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '')
    // console.log(tema, 'tema')
  }
  return (
    <AppContext.Provider value={{
      tema,
      alternarTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer