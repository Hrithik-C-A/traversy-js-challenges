function validAnagrams(str1, str2) {
    const string1 = str1.split('').sort().join('');
    const string2 = str2.split('').sort().join('');
    
    if (string1 === string2) {
      return true;
    } else {
      return false;
    }
  
  }

module.exports = validAnagrams;
