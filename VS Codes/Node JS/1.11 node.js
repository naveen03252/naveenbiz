function large(str) {
    const s = str.split(' '); 
    let largest = '';
  
    
    for (let i = 0; i < s.length; i++) {
      if (s[i].length > largest.length) {
        largest = s[i];
      }
    }
  
    return largest;
  }

  console.log(large('I love watching cricket'))
  