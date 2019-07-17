export function numIslands(grid: string[]): number {
    const x = grid.length;
    if (!x) {
        return 0;
    }

    const y = grid[0].length;

    const uf = '*'
        .repeat(x * y)
        .split('')
        .map((_, i) => i);

    function union(i, j) {
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI === rootJ) {
            return;
        } else {
            uf[rootJ] = rootI;
        }
    }

    function find(i) {
        if (uf[i] === i) {
            return i;
        } else {
            return find(uf[i]);
        }
    }

    for (let i = 0; i < x; ++i) {
        const line = grid[i];
        for (let j = 0; j < y; ++j) {
            if (line[j] === '1') {
                if (j + 1 < y && line[j + 1] === '1') {
                    union(i * y + j, i * y + j + 1);
                }
                if (i + 1 < x && grid[i + 1][j] === '1') {
                    union(i * y + j, i * y + j + y);
                }
            } else {
                uf[i * y + j] = -1;
            }
        }
    }

    return uf.filter((x, i) => x === i).length;
}
