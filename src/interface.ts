interface IUser { 
    readonly id: number
    name: string
    status?: boolean
}

const people: IUser = { 
    id: 1,
    name: "John"
}

interface IMathFunc { 
    (x: number, y: number): number
}

const additionFunc: IMathFunc = (x: number, y: number) => { 
    return x + y
}

const substract: IMathFunc = (x: number, y: number) => { 
    return x - y
}