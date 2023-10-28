function diceGameSimulation(numSimulations) {
    
    const results = [];

    for (let i = 0; i < numSimulations; i++) {

        const generateRandomNum = () => {
            const min = 1;
            const max = 6;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        const dice1 = generateRandomNum();
        const dice2 = generateRandomNum();
        const sum = Number(dice1)  + Number(dice2);
        let result = '';
    
        if (sum === 7 || sum === 11) {
            result = 'win';
        } else if ( sum === 2 || sum === 3 || sum === 12 ) {
            result = 'lose';
        } else {
            result = 'roll again';
        }

        results.push({ dice1, dice2, sum, result });
      }
  
      return results;
}

module.exports = diceGameSimulation;
