const JSADPromise = module.require('./Promise/JSADPromise');
// import { JSADPromise } from './Promise/JSADPromise';

const getFileData = _ => new JSADPromise((resolve, reject) => {
    setTimeout(resolve(42), 1000);
});

getFileData()
    .then(response => {
        console.log('First Response : ', response);
        return response + 1;
});


// Checking singleton Counter
const singletonCounter = module.require('./jsPatterns/singleton'); 
console.log(`
    Welcome to singleton Counter
    Initial Value of counter: ${singletonCounter.getCount()}
    Updating the value: ${singletonCounter.increment()}
`)
