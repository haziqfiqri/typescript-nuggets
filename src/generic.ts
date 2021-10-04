const getArray = <T>(items: T[]): T[] => { 
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3])
let strArray = getArray<string>(["John", "Doe", "Gil"])