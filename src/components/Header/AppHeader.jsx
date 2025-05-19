import styles from './Header.module.css';
import { Badge, Button, Col, Layout, Row, Space, Tooltip } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className={styles.header}>
      <Row justify="space-between" align="middle">
        {/* Левая часть */}
        <Col>
          <Tooltip title="Меню">
            <Button icon={<MenuOutlined />} type="text" />
          </Tooltip>
        </Col>

        {/* Правая часть */}
        <Col>
          <Space size="middle">
            <Tooltip title="Поиск">
              <Button icon={<SearchOutlined />} type="text" />
            </Tooltip>
            <Tooltip title="Аккаунт">
              <Button icon={<UserOutlined />} type="text" />
            </Tooltip>
            <Tooltip title="Избранное">
              <Button icon={<HeartOutlined />} type="text" />
            </Tooltip>
            <Tooltip title="Корзина">
              <Badge count={0} size="small">
                <Button icon={<ShoppingCartOutlined />} type="text" />
              </Badge>
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
