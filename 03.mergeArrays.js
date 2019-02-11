function mergeArrays(array1, array2) {
    let mergedArrays = [];
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            mergedArrays[i] = Number(array1[i]) + Number(array2[i]);
        } else {
            mergedArrays[i] = array1[i] + array2[i];
        }
    }
    let message = mergedArrays[0];
    for (let i = 1; i < mergedArrays.length; i++) {
        message += " - " + mergedArrays[i];
    }

    console.log(message);
}