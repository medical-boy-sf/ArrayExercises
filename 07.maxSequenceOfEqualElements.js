function maxSequenceOfEqualElements(array) {
    array = array[0].split(' ');
    let currentNum = 1;
    let maxNum = 0;
    let element = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentNum += 1;
            } else {
                break;
            }
        }

        if (currentNum > maxNum) {
            maxNum = currentNum;
            element = array[i];
        }

        currentNum = 1;
    }

    let message = '';

    for (let i = 0; i < maxNum; i++) {
        message += element + ' ';
    }

    console.log(message);
}