type suroj ={
    name: string,
    age: number,
    school: School,
    nation: string
}


type School ={
    name: string | number,
    location: string,
    reyting: number
    
}

let obj:suroj ={
    name: 'Siroj',
    age: 35,
    school:{
        name: 'Lenin 35',
        location: 'urgench',
        reyting: 1
    },
    nation:'uzbek'

}
console.log(obj);
