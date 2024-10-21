
const cornorNumber = [
    [1, 4, 2, 5], [2, 5, 3, 6], [4, 7, 5, 8], [5, 8, 6, 9], [7, 10, 8, 11], [8, 11, 9, 12],
    [10, 13, 11, 14], [11, 14, 12, 15], [13, 16, 14, 17], [14, 17, 15, 18], [16, 19, 17, 20],
    [19, 22, 20, 23], [20, 23, 21, 24], [22, 25, 23, 26], [23, 26, 24, 27], [25, 28, 26, 29],
    [26, 29, 27, 30], [28, 31, 29, 32], [29, 32, 30, 33], [31, 34, 32, 35], [32, 35, 33, 36]
];

// Function to find pairs that include a specific number
function findPairsForCornorNumber(number) {
    return cornorNumber.filter(pair => pair.includes(number));
}

export default cornorNumber;
export { findPairsForCornorNumber };
