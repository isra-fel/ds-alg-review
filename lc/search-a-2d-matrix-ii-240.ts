export function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix.length) {
        return false;
    }
    let x = 0;
    let y = matrix[0].length - 1;
    while (x < matrix.length && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        }
        if (target < matrix[x][y]) {
            --y;
        } else {
            ++x;
        }
    }
    return false;
}
