const createDoctor = (name, speciality, address) => {
    return { 
        name: name,
        speciality: speciality,
        address: address
    };
}

const drPepper = createDoctor("Jim", "Pediatrician", "123 Main Street");
console.log(drPepper)

const drSally = createDoctor("Sally", "Oncologist", "127 West Street")
console.log("drSally", drSally)

/*Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels*/

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}
const scooby = createPet("scooby", "Rotweiler")
console.log(scooby)

const BowWowKennels = [
    createPet("scooby", "Rotweiler"),
    createPet("Lucy", "Shepard"),
    createPet("steve", "human")
];
console.log("bowWowKennels", BowWowKennels)