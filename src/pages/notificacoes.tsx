import Layout from '../components/template/Layout';
// import { AppConsumer } from '../data/context/AppContext';
import useAppData from '../data/hook/useAppData';

export default function Notificações() {

  const dados = useAppData()
  return (
    <Layout titulo='Notificações' subtitulo='Aqui você irá gerencia as suas notificações!'>
      {/* <AppConsumer>
        {dados => <h3>{dados.nome}</h3>}
      </AppConsumer> */}
      <h3>{dados.nome}</h3>
    </Layout>
  )
}