import Layout from '../components/template/Layout';
// import { AppConsumer } from '../data/context/AppContext';
import useAppData from '../data/hook/useAppData';

export default function Notificações() {
  const {tema, alternarTema} = useAppData()
  return (
    <Layout titulo='Notificações' subtitulo='Aqui você irá gerencia as suas notificações!'>
      {/* <AppConsumer>
        {ctx => <h3>{ctx.nome}</h3>}
      </AppConsumer> */}
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  )
}