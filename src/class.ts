interface IPerson { 
    id: number
    name: string
    register(): string
}

class Person implements IPerson { 
    public id: number
    public name: string

    constructor (id: number, name: string) { 
        this.id = id
        this.name = name
    }

    register () { 
        return `Thank you for registering ${this.name}!`
    }
}

class Employee extends Person { 
    public position: string

    constructor (id: number, name: string, position: string) { 
        super(id, name)
        this.position = position
    }
}

const employeeJohn = new Employee (1, "John", "Dev")
