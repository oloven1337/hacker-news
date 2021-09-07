# Hacker-News

##    

Проект Hacker News отображает информацию из [Hacker News API](https://github.com/HackerNews/API). В проекте имеется две
страницы, одна отображает список самых свежих новостей (100 последних), вторая отображает конкретную новость с
комментариями.

## Установка

    git clone https://github.com/oloven1337/hacker-news.git
    cd hacker-news
    npm install

## Запуск

    npm start - dev server для локальной разработки

### Приложение доступно по адресу

    http://localhost:3000

## Сборка для production

    npm run build

## Языки & инструменты

### JavaScript

- [React](http://facebook.github.io/react) используется для пользовательского интерфейса
- [Redux](https://redux.js.org/) для управления состоянием всего приложения
- [Styled Components](https://styled-components.com/) для стилизации компонентов
- [PropTypes](https://ru.reactjs.org/docs/typechecking-with-proptypes.html) для проверки типов
- [Axios](https://axios-http.com/) для удобства в работе с AJAX запросами
- [Material UI](https://material-ui.com/ru/) позволяет использовать заготовленные элементы
