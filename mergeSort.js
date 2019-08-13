function merge(leftArray, rightArray) {
    var sortedSubArray= [];

    var i = 0;
    var j = 0;
    var k = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            sortedSubArray[k] = leftArray[i];
            i++;
        } else {
            sortedSubArray[k] = rightArray[j];
            j++;
        }

        k++;
    }

    while (i < leftArray.length) {
        sortedSubArray[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightArray.length) {
        sortedSubArray[k] = rightArray[j];
        j++;
        k++;
    }

    return sortedSubArray;
}

function mergeSort(array) {
    var length = array.length;

    if (length === 1) {
        return array;
    }

    var middle = Math.floor((length-1)/2);
    var leftArray = [];
    var rightArray = [];

    for (var i = 0; i <= middle; i++) {
        leftArray[i] = array[i];
    }
    for (var j = 0; j < length - middle - 1; j++) {
        rightArray[j] = array[middle + 1 + j];
    }

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    array = merge(leftArray, rightArray);

    return array;
}

var unsortedArray = [1, 3, 2, 5, 4];

var sortedArray = mergeSort(unsortedArray);

console.log(sortedArray);