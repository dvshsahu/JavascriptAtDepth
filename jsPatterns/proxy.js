
/*
Proxy means a stand-in for someone else. Instead of taking to the
object directly, you have to talk to proxy object.

The important point here is the Proxy keyword that is used to create
proxy object, the first param is the object, and the second param is the 
handler object,
Although many important handlers are available, but set and get are widely used.
The syntax below explains proxy,

It is used to perform validation or some other checks.
*/ 
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};

const personProxy = new Proxy(person, {

  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },

  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  }
});

const personProxyWithValidation = Proxy(person, {
  get: (obj, prop) => {
    if(!obj[prop]) console.log(`Hmm... the property ${prop} doesn't seems to exist on the target object`);
    else console.log(`The value of ${prop} is ${obj[prop]}`)

  },

  set: (obj, prop, value ) => {
    // checking age
    if(prop === 'age' && typeof prop !== number) {
      console.log(1`Sorry, you can only pass numeric values for age.!`);
    } else if(prop === 'name' && value.length < 2) {
      // checking name
      console.log('You need to provide a valid name');
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }
  }
})

module.exports  = personProxyWithValidation;