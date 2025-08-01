import personUtils = require("./person/Person")

const testMakePerson = () : void => {
    let jane= personUtils.makePerson('Jane')
    let jack= personUtils.makePerson('Jack')
    console.log(jane, jack)
}

testMakePerson();