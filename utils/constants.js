const regexUrl = /^(http[s]:\/\/)?[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]{2,}([a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=])*)/;
const regexRU = /^[а-яА-Я\s\d]+$/i;
const regexEN = /^[a-wA-W\s\d]+$/i;

const errorMessages = {
  badRequest: 'Некорректно переданные данные',
  mailBusy: 'Этот email уже занят',
  userNotFound: 'Такого пользователя не существует',
  movieNotFound: 'Такого фильма не существует',
  invalidEmailOrPassword: 'Неправильная почта или пароль',
  unauthorized: 'Необходима авторизация',
  noRights: 'У вас нет на это прав',
};

module.exports = {
  regexUrl,
  regexRU,
  regexEN,
  errorMessages,
};
