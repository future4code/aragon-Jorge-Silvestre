// Exercicio 2

export type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const afazeres: Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: "Wash the dishes",
        completed: false
    }, 
    {
        userId: 1,
        id: 2, 
        title: "Take out the garbage",
        completed: true
    },
    {
        userId: 2,
        id: 3,
        title: "Separate the dirty clothes",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Make the bed",
        completed: true
    },
    {
        userId: 3,
        id: 5,
        title: "Bathe the dog",
        completed: false
    },
    {
        userId: 3,
        id: 6,
        title: "Buy a new car",
        completed: true
    }
]