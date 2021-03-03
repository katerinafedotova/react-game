interface IAppLang {
  [key: string]: {
    [key: string]: string
  }
}
const languageConst:IAppLang = {
  english: {
    newGame: 'New Game',
    bestResults: 'Best Results',
    settings: 'Settings',
    chooseNumOfCards: 'Choose number of cards to start a game',
    start: 'START',
    chooseNumOfCardsModal: 'Choose number of cards',
    sound: 'Sound',
    on: 'on',
    off: 'off',
    cardFace: 'Card Face',
    default: 'default',
    paysage: 'paysage',
    city: 'city',
    language: 'Language',
    ru: 'russian',
    en: 'english',
    mode: 'Mode',
    dark: 'dark',
    light: 'light',
    time: 'Time',
    turn: 'Number of turns',
    cards: 'Number of cards',
    date: 'Date',
    pairsFound: 'Pairs found',
    gameFinished: 'Game finished! It took you',
    turns: 'turns to find all pairs',
    fullscreen: 'Set to fullscreen',
  },
  russian: {
    newGame: 'Новая игра',
    bestResults: 'Лучшие результаты',
    settings: 'Настройки',
    chooseNumOfCards: 'Выбери количество карточек, чтобы начать игру',
    start: 'НАЧАТЬ',
    chooseNumOfCardsModal: 'Выбери количество карточек',
    sound: 'Звук',
    on: 'вкл',
    off: 'выкл',
    cardFace: 'Рубашка карточек',
    default: 'стандартная',
    paysage: 'пейзаж',
    city: 'город',
    language: 'Язык',
    ru: 'русский',
    en: 'английский',
    mode: 'Тема',
    dark: 'тёмная',
    light: 'светлая',
    time: 'Время',
    turn: 'Количество ходов',
    cards: 'Количество карточек',
    date: 'Дата',
    pairsFound: 'Найденные пары',
    gameFinished: 'Ииии игра окончена! Тебе понадобилось',
    turns: 'ходов, чтобы найти все пары',
    fullscreen: 'Развернуть во весь экран',
  },
};
export default languageConst;
