const messageErrors = {
  badRequest: 'Некорректно переданные данные',
  moviedId: 'Некорректно переданный id фильма',
  noToken: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате',
  invalidToken: 'При авторизации произошла ошибка. Переданный токен некорректен',
  mailBusy: 'Этот email уже занят',

  userNotFound: 'Такого пользователя не существует',
  movieNotFound: 'Такого фильма не существует',
  notFound: 'Ресурс не найден',

  invalidEmailOrPassword: 'Вы ввели неправильный логин или пароль',
  invalidEmail: 'Поле email заполнено некорректно',
  invalidImages: 'Поле image заполено некорректно',
  invalidTrailerLink: 'Поле trailer link заполено некорректно',
  invalidThumbnail: 'Поле thumbnail заполено некорректно',

  registrationUser: 'При регистрации пользователя произошла ошибка',
  updateUser: 'При обновлении профиля произошла ошибка',
  addMovie: 'При добавление фильма произошла ошибка',

  noRights: 'У вас нет на это прав',
  serverError: 'На сервере произошла ошибка',
  limiterError: 'Уф... вот это скорость! Дайте серверу минутку',
  bye: 'Покасики!',
};

module.exports = {
  messageErrors,
};
