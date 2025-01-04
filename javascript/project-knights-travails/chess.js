function knightMoves(startPoint, endPoint) {
    var path = [startPoint];
    // LOGIC
    path.push([4, 5]);
    path.push([2, 4]);
    path.push(endPoint);
    var formattedPath = path.map(function (coord) { return "[".concat(coord.join(","), "]"); }).join("\n");
    var moves = path.length - 1;
    return console.log("You made it in ".concat(moves, " moves! Here's your path: \n").concat(formattedPath));
}
knightMoves([3, 3], [4, 3]);
// knightMoves([3, 3], [4, 3], [6, 8], [11, 5]);
// TODO: return shortest possible way to get from one square on chess board to another by outputting all squares the knight will
// stop on along the way
