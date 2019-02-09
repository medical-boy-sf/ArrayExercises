function addAndSubtract(input) {
    let firstArrSum = 0;
    for (let i = 0; i < input.length; i++) {
        firstArrSum += Number(input[i]);
    }

    let secondArr = [];
    let secondArrSum = 0;

    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) % 2 === 0) {
            secondArr[i] = Number(input[i]) + i;
        } else {
            secondArr[i] = Number(input[i]) - i;
        }
    }

    for (let i = 0; i < secondArr.length; i++) {
        secondArrSum += Number(secondArr[i]);
    }

    console.log(secondArr);
    console.log(firstArrSum);
    console.log(secondArrSum);
}