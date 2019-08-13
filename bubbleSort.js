function bubbleSort(array) {
    var length = array.length;

    for(var i = 0; i < length; i++) {
        var swapped = false;

        for (var j = 0; j < length; j++) {
            if (array[j+1] < array[j]) {
                // swapping minimum index element with lesser value
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                swapped = true;
            }
        }

        // This is an optimization to decrease the number of operations.
        if (!swapped) {
            return array;
        }
    }

    return array;
}

var unsortedArray = [8, 4, 2, 9, 3, 1, 6, 7, 5];

var sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray);

// Time complexity: O(n^2)
// Space complexity: O(1)
// in-place sorting algorithm
