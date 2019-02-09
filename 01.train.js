function train(wagons, input) {
    wagons = Number(wagons);
    let sum = 0;
    let message = '';

    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
        message += input[i] + ' ';
    }

    console.log(message);
    console.log(sum);
}

train(1, [100]);