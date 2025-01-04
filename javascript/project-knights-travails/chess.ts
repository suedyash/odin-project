type chessCoordType = [number, number];

const possibleMoves: chessCoordType[] = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [-2, 1],
  [-1, -2],
  [-2, -1],
  [1, -2],
  [2, -1],
];

function getValidMoves(position: chessCoordType): chessCoordType[] {
  const [x, y] = position;
  return possibleMoves
    .map(([dx, dy]) => [x + dx, y + dy] as chessCoordType) // Calculate new coordinates
    .filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8); // Filter out moves off the board
}

function bfsKnight(
  startPoint: chessCoordType,
  endPoint: chessCoordType,
): chessCoordType[] {
  const queue: [chessCoordType, chessCoordType[]][] = [
    [startPoint, [startPoint]],
  ];

  while (queue.length > 0) {
    const [current, path] = queue.shift()!;
    if (current[0] === endPoint[0] && current[1] === endPoint[1]) {
      return path;
    }
    const moves = getValidMoves(current);
    moves.forEach((move) => queue.push([move, [...path, move]]));
  }

  return [];
}

function knightMoves(startPoint: chessCoordType, endPoint: chessCoordType) {
  const path = bfsKnight(startPoint, endPoint);

  let formattedPath: string = path
    .map((coord) => `[${coord.join(",")}]`)
    .join("\n");

  const moves = path.length - 1;

  return console.log(
    `You made it in ${moves} moves! Here's your path: \n${formattedPath}`,
  );
}

knightMoves([3, 3], [4, 3]);
