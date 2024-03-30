function knightMoves(source, target) {
    allMoves = [];
    allMoves.unshift(target);
    let node = target;

    while (node !== source) {
        let result = buildPath(source, node);
        allMoves.unshift(result);
        node = result;
    }

    console.log(`You made it in ${allMoves.length - 1} moves! Here is your path:`)
    return allMoves; 
}

function buildPath(source, target, queue = []) {
    if (source == target) return [];
    
    let possibleMoves = getPossibleMoves(source);
    if (isMoveInPossibleMoves(target, possibleMoves)) {
        return source;
    } else {
        for (let move of possibleMoves) {
            queue.push(move);
        }
        return buildPath(queue.shift(), target, queue);
    }
}

function getPossibleMoves(source) {
    const result = [ [source[0] + 2, source[1] + 1],
            [source[0] + 2, source[1] - 1], 
            [source[0] + 1, source[1] + 2], 
            [source[0] + 1, source[1] - 2], 
            [source[0] - 1, source[1] + 2], 
            [source[0] - 1, source[1] - 2], 
            [source[0] - 2, source[1] + 1], 
            [source[0] - 2, source[1] - 1],
        ]    
    return result.filter((res) => res[0] >= 0 && res[1] >= 0 && res[0] <= 7 && res[1] <= 7);
}

function isMoveInPossibleMoves(move, possibleMoves) {
    for (item of possibleMoves) {
        if (item[0] == move[0] && item[1] == move[1]) return true;
    }
    return false;
}

// Testing
//console.log(getPossibleMoves([3,3]))
//console.log(getPossibleMoves([1,2]))
console.log(knightMoves([0,0],[3,3]))
console.log(knightMoves([3,3],[0,0]))
console.log(knightMoves([0,0],[7,7]))