export type Cars = {
    id:Number,
    model: string,
    licensePlate: string,
    year: string,
    color: string,
    createAt: Date
}

export type Car = Omit<Cars, "id" | "createAt" >