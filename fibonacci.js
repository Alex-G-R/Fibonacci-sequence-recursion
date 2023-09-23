function fibonacci(targetIndex) {
    if(targetIndex === 0) return 0;
    if(targetIndex === 1) return 1;

    return fibonacci(targetIndex - 1) + fibonacci(targetIndex - 2)
}

const result  = fibonacci(11);

console.log(result) 