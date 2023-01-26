import prisma from "../config/database.js";
import { Car } from "../protocols/carsProtocols.js";

async function getCars() {
  return prisma.cars.findMany() //await db.query(`SELECT * FROM cars`);
  
}

async function getCar(id: number) {

  return prisma.cars.findUnique({
    where:{
      id: id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {

  return prisma.cars.findUnique({
    where:{
      licensePlate: licensePlate
    }
  })
}

async function createCar(car: Car) {

  return prisma.cars.create({
    data: car
  })
}

async function deleteCar(id: number) {

  return prisma.cars.delete({
    where:{
      id: id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;