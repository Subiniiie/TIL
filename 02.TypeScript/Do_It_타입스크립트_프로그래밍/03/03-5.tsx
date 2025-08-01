// 객체의 타입변환

// 타입 단언
// (<타입>객체)
// (객체 as 타입)

interface Inameable {
    name: string
};

let obj: object = {name: "Jack"}

let name1 = obj as Inameable;
console.log(name1)  // { name: 'Jack' }