function magicSum(array, magicSum) {
    magicSum = Number(array[1]);
    array = array[0].split(' ');
    let numStr = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Number(array[i]) + Number(array[j]) === magicSum) {
                numStr = array[i] + ' ' + array[j];
                console.log(numStr);
            }
        }
    }
}