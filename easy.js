'use strict';

(() => {
  const getRandomIntInclusive = (min = 1, max = 2) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getNumber = (min, max) => {
    const playerChoice = prompt(`Загадай число от ${min} до ${max}`);

    if (playerChoice === null) {
      return null;
    }

    if (playerChoice >= min && playerChoice <= max) {
      return +playerChoice;
    }

    return getNumber(min, max);
  };

  const game = () => {
    const marblesCount = {
      player: 5,
      computer: 5,
      checkMarbles() {
        if (this.player > 0 && this.computer > 0) {
          return true;
        } else {
          return false;
        }
      },
    };

    const playerTurn = () => {
      console.log(`
        Количество шариков
        Игрок: ${marblesCount.player}
        Бот: ${marblesCount.computer}
      `);
      const player = getNumber(1, marblesCount.player);
      const computer = getRandomIntInclusive();

      if (player === null) return null;

      if ((player % 2 && computer % 2) ||
        (player % 2 === 0 && computer % 2 === 0)) {
        marblesCount.player -= player;
        marblesCount.computer += player;
        console.log('Компьютер забирает шарики');
      } else {
        marblesCount.player += player;
        marblesCount.computer -= player;
        console.log('Игрок забирает шарики');
      }

      if (marblesCount.checkMarbles()) {
        return playerTurn();
      }
    };

    return function start() {
      console.log('Старт игры');
      if (playerTurn() !== null) {
        if (marblesCount.player > marblesCount.computer) {
          console.log('Конец игры');
          alert('Игрок выиграл');
        } else {
          console.log('Конец игры');
          alert('Компьютер выиграл');
        }
      } else {
        console.log('Конец игры');
      }
    };
  };

  window.marbles = game;
})();
