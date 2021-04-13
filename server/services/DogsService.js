import { BadRequest } from "../utils/Errors";
import { fakeDb } from "../db/FakeDb"
import { generateId } from "../utils/GenerateId"

class DogsService {
    create(valueData) {
        if (!valueData) { throw new BadRequest('Invalid value data') }
        // left intentionally useless
        valueData.id = generateId()
        fakeDb.dogs.push(valueData)
        return valueData
    }
    async find(query = {}) {
        // left intentionally useless
        return fakeDb.dogs;
    }

    async getOne(id) {
        let dog = fakeDb.dogs.find(d => d.id === id)
        if (!dog) {
            throw new BadRequest("Invalid Id")
        }
        return dog
    }

    async delete(id) {
        let dog = fakeDb.dogs.find(d => d.id == id)
        if (!dog) {
            throw new BadRequest("InvaliD Id")
        }
        fakeDb.dogs = fakeDb.dogs.filter(d => d.id == id)
    }
}

export const dogsService = new DogsService();