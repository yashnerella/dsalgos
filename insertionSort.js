function insertionSort(array) {
    var length = array.length;

    for (var i = 0; i < length; i++) {
        var itemToBeInserted = array[i];

        for(var j = i-1; j >= 0 && itemToBeInserted < array[j]; j--) {
            array[j+1] = array[j];
        }

        array[j+1] = itemToBeInserted;
    }

    return array;
}

var unsortedArray = [8, 4, 2, 9, 3, 1, 6, 7, 5];

var sortedArray = insertionSort(unsortedArray);

console.log(sortedArray);

// Time complexity: O(n^2)
// Space complexity: O(1)
// in-place sorting algorithm
