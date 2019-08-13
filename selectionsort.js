function selectionSort(array) {
    var length = array.length;

    for(var i = 0; i < length; i++) {
        var minimumIndex = i;
        var temp = 0;

        for(var j = i+1; j < length; j++) {
            if (array[j] < array[minimumIndex]) {
                // swapping minimum index element with lesser value
                temp = array[minimumIndex];
                array[minimumIndex] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

var unsortedArray = [8, 4, 2, 9, 3, 1, 6, 7, 5];

var sortedArray = selectionSort(unsortedArray);

console.log(sortedArray);

// Time complexity: O(n^2)
// Space complexity: O(1)
// in-place sorting algorithm
// It does exactly O(n) swaps