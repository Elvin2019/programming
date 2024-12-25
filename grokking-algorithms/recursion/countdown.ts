// def countdown(i):
// print i
// if i <= 0: Base case
// return
// else: Recursive case
// // countdown(i-1)

const countdown = (i: number): void => {
    console.log(i);
    if (i <= 0) {
        return;
    } else {
        countdown(i - 1);
    }
};

countdown(10);