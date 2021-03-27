process.on("message", message => {
    //child process is listening for messages by the parent process
    const result = isPrime(message.number);
    process.send(result);
    process.exit(); // make sure to use exit() to prevent orphaned processes
  });
  
  function isPrime(number) {
    let isPrime = true;
    let count = 0;
  
    for (let i = 3; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
      count++;
    }
    return {
      number: number,
      isPrime: isPrime,
    };
  }