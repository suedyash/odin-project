type chessCoordType = [number, number];

function knightMoves(startPoint: chessCoordType, endPoint: chessCoordType) {
  const path: chessCoordType[] = [startPoint];

  // LOGIC
  path.push([4, 5]);
  path.push([2, 4]);

  path.push(endPoint);

  let formattedPath: string = path
    .map((coord) => `[${coord.join(",")}]`)
    .join("\n");

  const moves = path.length - 1;

  return console.log(
    `You made it in ${moves} moves! Here's your path: \n${formattedPath}`,
  );
}

knightMoves([3, 3], [4, 3]);

// TODO: return shortest possible way to get from one square on chess board to another by outputting all squares the knight will
// stop on along the way
