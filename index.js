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
