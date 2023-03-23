# movies-explorer-api

Серверная часть приложения Movies.

```
Не защищенные роуты:

POST `/signup` - создать пользователя

POST `/signin` - авторизация

```

```
Защищенные роуты:

GET `/users/me` - информация о пользователе

PATCH `/users/me` - обновить данные пользователя

GET `/movies/me` - все сохраненные фильмы текущего пользователя

POST `/movies` - создать фильм (необходимые данные для body смотрить в схеме)

DELETE `/movies/:movieId` - удалить сохрененный фильм по id

GET `/signout` - разлогиниться

```

## Технологии при разработке:

- БД MongoDB
- express v4.18.1
- mongoose v6.4.6
- eslint v8.20 (airbnb-base v15)
- winston v3.8.1
- JWT

## Развертывание:

в терминале перейти в каталог куда будет слонирован репозиторий \
клонировать репозиторий командой в cli git clone `https://github.com/Taashev/movies-explorer-api.git` \
перейти в дерикторию и установить все зависимости командой `npm i`

## Запуск backend

Если у вас еще не установлена [MongoDB](https://www.mongodb.com/) то скачайте и установите ее. \
[ссылка на скачивание](https://www.mongodb.com/try/download/community-kubernetes-operator)

Создайте БД с именем `moviesdb` \
Запустите MongoDB в терминале командой `mongod` или через приложение [MongoDB Compass](https://www.mongodb.com/products/compass)

`Если у вас возникнет ошибка "const serverSelectionError = new ServerSelectionError();" при подключении к БД то попробуйте сменить URL подключения mongo с localhost на 127.0.0.1`

По умолчанию сервер запускается на 3000 порту \
`npm run start` — запускает сервер \
`npm run dev` — запускает сервер в режиме разработки с hot-reload \
(Для того, что бы запустить сервер на ином порту укажиите порт при запуске например `npm run dev PORT = 8080`)
