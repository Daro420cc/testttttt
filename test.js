// setTimeout
setTimeout(() => {
    console.log("បន្ទាប់ពី 1 វិនាទី");
}, 1000);

// setInterval
let count = 0;
const intervalId = setInterval(() => {
    console.log(`ចំនួន: ${++count}`);
    if (count === 5) {
        clearInterval(intervalId);
        console.log("បញ្ឈប់ setInterval");
    }
}, 1000);