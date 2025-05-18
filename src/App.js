import 'antd/dist/reset.css';
import { Layout } from 'antd';
import Header from './components/Header';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Content>{/* Контент */}</Content>
    </Layout>
  );
}
export default App;
