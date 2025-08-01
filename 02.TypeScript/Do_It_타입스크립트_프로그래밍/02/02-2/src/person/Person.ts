let MAX_AGE = 100;

interface IPerson {
    name: string;
    age: number
};

class Person implements IPerson {
    constructor(public name:string, public age: number) {}
}

function makeRandomNumber(max: number = MAX_AGE) {
    return Math.ceil((Math.random() * max))
};

const makePerson = (name: string, 
    age:number = makeRandomNumber()) => ({ name, age})

export = {
    makePerson
}