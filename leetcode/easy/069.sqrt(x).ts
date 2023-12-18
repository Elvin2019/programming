function mySqrt(x: number): number {
    if (x === 0 || x === 1) return x;
    if (x === 2) return 1;

    let i = 2;
    while (i < x) {
        if (i * i === x) {
            return i;
        }

        if (i * i > x) {
            return i - 1;
        }

        i++;
    }
}
