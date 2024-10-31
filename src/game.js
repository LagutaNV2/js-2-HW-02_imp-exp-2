// Модуль Game - отвечающий за работу приложения (загрузку и сохранение)

import Character from './domain.js';

class Game {
    start() {
      console.log('game started');
    }
  }

  class GameSavingData {
  }

  function readGameSaving() {
  }

  function writeGameSaving() {
  }

  // Экспортируем Game как default и другие элементы именованными экспортами
export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
