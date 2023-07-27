import { faker } from '@faker-js/faker/locale/es';


export const generateProduct = () =>{
    return{
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        code: faker.string.alphanumeric(10),
        stock: faker.number.int({min:0,max:100})
    }
}