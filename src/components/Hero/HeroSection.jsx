import styles from './HeroSection.module.css';
import { Button } from 'antd';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Добро пожаловать в STORE</h1>
        <p>Открой для себя лучшие товары по выгодным ценам</p>
        <Button type="primary" size="large">
          Перейти в каталог
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
