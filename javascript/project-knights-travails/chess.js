var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var possibleMoves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
];
function getValidMoves(position) {
    var x = position[0], y = position[1];
    return possibleMoves
        .map(function (_a) {
        var dx = _a[0], dy = _a[1];
        return [x + dx, y + dy];
    }) // Calculate new coordinates
        .filter(function (_a) {
        var nx = _a[0], ny = _a[1];
        return nx >= 0 && nx < 8 && ny >= 0 && ny < 8;
    }); // Filter out moves off the board
}
function bfsKnight(startPoint, endPoint) {
    var queue = [
        [startPoint, [startPoint]],
    ];
    var _loop_1 = function () {
        var _a = queue.shift(), current = _a[0], path = _a[1];
        if (current[0] === endPoint[0] && current[1] === endPoint[1]) {
            return { value: path };
        }
        var moves = getValidMoves(current);
        moves.forEach(function (move) { return queue.push([move, __spreadArray(__spreadArray([], path, true), [move], false)]); });
    };
    while (queue.length > 0) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return [];
}
function knightMoves(startPoint, endPoint) {
    var path = bfsKnight(startPoint, endPoint);
    var formattedPath = path
        .map(function (coord) { return "[".concat(coord.join(","), "]"); })
        .join("\n");
    var moves = path.length - 1;
    return console.log("You made it in ".concat(moves, " moves! Here's your path: \n").concat(formattedPath));
}
knightMoves([3, 3], [4, 3]);
