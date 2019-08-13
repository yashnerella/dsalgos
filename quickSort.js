function partition(array, lowerBound, upperBound) {
    var pivotElement = array[lowerBound];
    var start = lowerBound;
    var end = upperBound;
    var temp = 0;

    while (start < end) {
        while (array[start] <= pivotElement) {
            start++;
        }

        while (array[end] > pivotElement) {
            end--;
        }

        if (start < end) {
            temp = array[start];
            array[start] = array[end];
            array[end] = temp;
        }
    }

    temp = array[end];
    array[end] = array[lowerBound];
    array[lowerBound] = temp;

    return end;
}

function quickSort(array, lowerBound, upperBound) {

    if (lowerBound < upperBound) {
        var pivotPosition = partition(array, lowerBound, upperBound);
        quickSort(array, lowerBound, pivotPosition-1);
        quickSort(array, pivotPosition + 1, upperBound);
    }

    return array;
}

var unsortedArray = [8, 4, 2, 9, 3, 1, 6, 7, 5];

var sortedArray = quickSort(unsortedArray, 0, unsortedArray.length-1);

console.log(sortedArray);

// Time complexity: O(n^2)
// Space complexity: O(1)
// in-place sorting algorithm
