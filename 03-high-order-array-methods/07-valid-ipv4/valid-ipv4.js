const isValidIPv4 = (input) => {
    const inputArr = input.split('.');
  
    const condition1 = inputArr.length === 4;
    const condition2 = inputArr.every(item => {
        const num = parseInt(item);
        return (num >= 0 && num <= 255) && item === num.toString();
    });
  
    if (condition1 && condition2) {
      return true;
    } else {
      return false;
    }
  
  };

module.exports = isValidIPv4;
