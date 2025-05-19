import { Layout } from 'antd';
import AppHeader from '../Header/AppHeader';
import HeroSection from '../Hero/HeroSection';
import AppFooter from '../Footer/AppFooter';
import MainContent from './MainContent';
import styles from './MainLayout.module.css';
const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className={styles.layout}>
      <AppHeader />
      <HeroSection />
      <Content className={styles.content}>
        <MainContent />
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default MainLayout;
