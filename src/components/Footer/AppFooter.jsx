import { Layout } from 'antd';
import styles from './AppFooter.module.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>STORE</div>
        <div className={styles.links}>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div className={styles.copy}>
          © {new Date().getFullYear()} STORE. Все права защищены.
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
