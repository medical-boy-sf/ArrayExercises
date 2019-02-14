function maxNumber(array) {
    let areBigger = true;
    let arrBigger = [];
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] <= array[j]) {
                areBigger = false;
            }

        }
        if (areBigger) {
            arrBigger[counter] = array[i];
            counter++;
        }
        areBigger = true;
    }

    console.log(arrBigger.join(' '));
}