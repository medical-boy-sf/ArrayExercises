function equalSum(array) {
    let isThereMatch = false;
    let index = '';
    for (let i = 0; i < array.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < i; j++) {
            sumLeft += array[j];
        }

        for (let j = i + 1; j < array.length; j++) {
            sumRight += array[j];
        }

        if (sumLeft === sumRight) {
            index = i;
            isThereMatch = true;
        }
    }
        if(array.length === 1) {
            index = 0;
        }

        if(index !== 0 && !isThereMatch) {
            index = 'no';
        }
        console.log(index);
}