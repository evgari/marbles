'use strict';

(() => {
  const getRandomIntInclusive = (min = 1, max = 2) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getNumber = (min = 1, max = 5) => {
    const playerChoice = prompt(`Загадай число от ${min} до ${max}`);

    if (playerChoice >= min && playerChoice <= max) {
      return +playerChoice;
    } else {
      return getNumber();
    }
  };

  const game = () => {
    const marblesCount = {
      player: 5,
      computer: 5,
      get result() {
        if (this.player > this.computer) {
          return 'Игрок выиграл';
        } else {
          return 'Компьютер выиграл';
        }
      },
    };

    const gameProgress = () => {
      console.log(`
        Количество шариков
        Игрок: ${marblesCount.player}
        Компьютер: ${marblesCount.computer}
      `);
    };

    console.log('Старт игры');

    return function start() {
      const player = getNumber();
      const computer = getRandomIntInclusive();

      if ((player % 2 && computer % 2) ||
        (player % 2 === 0 && computer % 2 === 0)) {
        marblesCount.player -= player;
        marblesCount.computer += player;
      } else {
        marblesCount.player += player;
        marblesCount.computer -= player;
      }

      if (marblesCount.player <= 0 || marblesCount.computer <= 0) {
        alert(`${marblesCount.result}`);
        console.log('Конец игры');
      } else {
        gameProgress();
        start();
      }
    };
  };

  window.marbles = game;
})();

