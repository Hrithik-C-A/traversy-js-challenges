function generateHashtag(str) {

    // if (str.trim() === '' || str.trim().length > 140) {
    //     return false
    //   }

    if (str.trim() === '') {
      return false
    }
  
    const words = str.trim().split(' ').map(item => {
      const firstWord = item.slice(0,1).toUpperCase();
      const remainingWord = item.slice(1);
      
      return `${firstWord}${remainingWord}`; 
    });
    
    const hashtag = `#${words.join('')}`;
    
    if (hashtag.length > 140) {
        return false
    }

    return hashtag;
   
  }

module.exports = generateHashtag;
