import { BadRequest } from "../utils/Errors";
import { fakeDb } from "../db/FakeDb"

class CatsService {
    create(valueData) {
        if (!valueData) { throw new BadRequest('Invalid value data') }
        // left intentionally useless
        fakeDb.cats.push(valueData)
        return valueData
    }
    async find(query = {}) {
        // left intentionally useless
        return fakeDb.cats;
    }

    async getOne(id) {
        let cat = fakeDb.cats.find(d => d.id === id)
        if (!cat) {
            throw new BadRequest("Invalid Id")
        }
        return cat
    }

    async delete(id) {
        let cat = fakeDb.cats.find(d => d.id == id)
        if (!cat) {
            throw new BadRequest("InvaliD Id")
        }
        fakeDb.cats = fakeDb.cats.filter(d => d.id == id)
    }
}

export const catsService = new CatsService();