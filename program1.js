const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
      return 0;
  }
  
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Array(rows).fill().map(() => new Array(cols).fill(false));
  let numIslands = 0;
  
  function dfs(row, col) {
     
      if (row < 0 || row >= rows || col < 0 || col >= cols) {
          return;
      }
      if (visited[row][col] || grid[row][col] === 'W') {
          return;
      }
      
      
      visited[row][col] = true;
      
     
      dfs(row - 1, col); // up
      dfs(row + 1, col); // down
      dfs(row, col - 1); // left
      dfs(row, col + 1); // right
  }
  
  // Traverse the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L' && !visited[r][c]) {
              // Found an unvisited land cell, initiate DFS
              dfs(r, c);
              numIslands++;
          }
      }
  }
  
  return numIslands;
};

module.exports = getTotalIsles;
