function arrayRotation(array, rotations) {
    rotations = Number(rotations);

    for (let j = 0; j < rotations; j++) {
        let newArray = [];
        for (let i = 0; i < array.length - 1; i++) {
            newArray[i] = array[i + 1]
        }

        newArray[newArray.length] = array[0];
        array = newArray;
    }
    console.log(array.join(' '));
}