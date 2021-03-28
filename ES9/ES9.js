/**
 * Spread Operator
 */
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
};

let { name, ...addInfo } = obj;
console.log(`name: ${name}`);
console.log(`additional information: `, addInfo);

let { country, ...nameAndAge } = obj;
console.log(`name and age: `, nameAndAge);

/**
   * Porpagation Properties
   */
const person = {
    name: 'Oscar',
    age: 32
};

const personInformation = {
    ...person,
    country: 'MX'
};
console.log(`personInformation: `, personInformation);

/**
   * Promise Finally
   */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
    true
        ? setTimeout(() => {
            resolve('Hello World!');}, 3000)
        : reject(new Error('Test Error'));
    });
};

helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));

/**
   * Regex
   */
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
    const match = regexData.exec('2018-04-28');
    const year = match[1];
    const month = match[2];
    const day = match[3];
    console.log('Date -> ', year, month, day);