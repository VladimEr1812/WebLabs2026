import React, { useState, useEffect } from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import bridge from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';

export const Home = ({ id, fetchedUser }) => {
  const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();
  
  // State для случайного изображения
  const [randomImage, setRandomImage] = useState('');

  // Функция для получения случайного изображения
  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/200');
      setRandomImage(response.url);
    } catch (error) {
      console.error('Ошибка при получении случайного изображения:', error);
    }
  };

  // Открытие редактора историй с случайным изображением
  const openStoryEditor = () => {
    bridge.send('VKWebAppShowStoryBox', {
      background_type: 'image',
      url: randomImage,
      locked: true,
    }).catch((error) => console.error('Ошибка при открытии редактора историй:', error));
  };

  // Получаем случайное изображение при загрузке компонента
  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      
      {/* Данные пользователя */}
      {fetchedUser && (
        <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
          <Cell before={photo_200 && <Avatar src={photo_200} />} subtitle={city?.title}>
            {`${first_name} ${last_name}`}
          </Cell>
        </Group>
      )}

      {/* Навигация к другой панели */}
      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('persik')}>
            Покажите Персика, пожалуйста!
          </Button>
        </Div>
      </Group>

      {/* Кнопка для открытия редактора историй */}
      <Group header={<Header mode="secondary">Редактор историй</Header>}>
        <Div>
          <Button stretched size="l" mode="primary" onClick={openStoryEditor}>
            Открыть редактор с случайным изображением
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
