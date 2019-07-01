export function q1(candies: number, num_people: number): number[] {
    function candiesNeededForRound(round: number): number {
        return (
            (num_people * (num_people + 1)) / 2 +
            round * num_people * num_people
        );
    }

    function candiesToGive(round: number, i: number): number {
        return round * num_people + i + 1;
    }

    let round = 0;
    while (candies >= candiesNeededForRound(round)) {
        candies -= candiesNeededForRound(round);
        ++round;
    }
    --round;
    let dist = '*'
        .repeat(num_people)
        .split('')
        .map((_, i) =>
            round === -1
                ? 0
                : ((round + 1) * (round * num_people + 2 * i + 2)) / 2
        );
    ++round;
    let i = 0;
    while (candies > 0) {
        const toGive = Math.min(candiesToGive(round, i), candies);
        dist[i] += toGive;
        candies -= toGive;
        ++i;
    }

    return dist;
}

export function zzMapper(label: number, level: number): number {
    if (level % 2) {
        return 2 ** level + 2 ** (level + 1) - 1 - label;
    } else {
        return label;
    }
}

export function calcZzLevel(label: number): number {
    let level = 0;
    while (label >= 2 ** (level + 1)) {
        ++level;
    }
    return level;
}

export function getOriginalPath(label: number): number[] {
    const path = [];
    while (label) {
        path.push(label);
        label = Math.floor(label / 2);
    }
    return path.reverse();
}

export function pathInZigZagTree(label: number): number[] {
    const level = calcZzLevel(label);
    const originalLabel = zzMapper(label, level);
    const originalPath = getOriginalPath(originalLabel);
    return originalPath.map(zzMapper);
}
