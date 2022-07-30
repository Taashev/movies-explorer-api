const messageErrors = {
  badRequest: 'Некорректно переданные данные',
  moviedId: 'Некорректно переданный id фильма',
  unauthorized: 'Необходима авторизация',
  mailBusy: 'Этот email уже занят',

  userNotFound: 'Такого пользователя не существует',
  movieNotFound: 'Такого фильма не существует',
  notFound: 'Ресурс не найден',

  invalidEmailOrPassword: 'Неправильная почта или пароль',
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
