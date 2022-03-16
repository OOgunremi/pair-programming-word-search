// This gist was developed using Paired Programing between
// Olalekan Isaac Ogunremi and Matthew Seligman

const wordSearch = (letters, word) => {
  const transpose = matrix => {
    let answer = [];
    
    for (let rows = 0; rows < matrix.length; rows++) {
          
      for (let columns = 0; columns < matrix[rows].length; columns++) {
        answer.push([]);
        answer[columns].push(matrix[rows][columns]);
      }
    } return answer;
  };

    
  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposed = transpose(horizontalJoin).map((innerArray) => innerArray.join(""));

  for (let l of transposed) {
    if (l.includes(word)) return true;
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
    
  return false;
};

module.exports = wordSearch;