# Catalog

Для проекта используется json-server (https://github.com/typicode/json-server#getting-started), для локального запуска сервер запустится по команде `npm run start` (сервер запустится на localhost:3000)
Для использования версии деплоя [https://superb-cheesecake-d23906.netlify.app/] необходимо установить json-server (npm install -g json-server) и использовать базу данных из этого репо (json-server --watch db.json)

## Краткое описание

Пример каталога
Страницы:
1. Список items
2. Страница детальной информации item (переход на эту страницу осуществляется при клике на название item'а на странице "Список items")
3. Страница добавления нового item в список items.

## Используемые технологии

Lazy loading modules;
Получение данных по http;
Scss, вёрстка на flexbox'ах с применением методологии БЭМ;
Reactive forms + custom validation (на странице создания нового item);
RxJS;
Angular material + theming angular material;
