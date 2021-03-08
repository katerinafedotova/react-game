interface AppLang {
  [key: string]: {
    [key: string]: string
  }
}
const languageConst:AppLang = {
  english: {
    newGame: 'New Game',
    bestResults: 'Best Results',
    settings: 'Settings',
    chooseNumOfCards: 'Choose number of cards to start a game',
    start: 'START',
    chooseNumOfCardsModal: 'Choose number of cards',
    sound: 'Sound',
    music: 'Music',
    on: 'on',
    off: 'off',
    volume: 'Volume',
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
    hotkeys: 'Hotkeys',
    startNewGame: 'start new game',
    openSettings: 'open settings',
    toggleSound: 'toggle sound',
    openBestResults: 'open best results',
  },
  russian: {
    newGame: 'Новая игра',
    bestResults: 'Лучшие результаты',
    settings: 'Настройки',
    chooseNumOfCards: 'Выбери количество карточек, чтобы начать игру',
    start: 'НАЧАТЬ',
    chooseNumOfCardsModal: 'Выбери количество карточек',
    sound: 'Звук',
    music: 'Музыка',
    on: 'вкл',
    off: 'выкл',
    volume: 'Громкость',
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
    hotkeys: 'Горячие клавиши',
    startNewGame: 'начать новую игру',
    openSettings: 'открыть настройки',
    toggleSound: 'включить/выключить звук',
    openBestResults: 'открыть лучшие результаты',
  },
};
export default languageConst;
