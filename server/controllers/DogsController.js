import BaseController from "../utils/BaseController";
import { dogsService } from "../services/DogsService";



export class DogsController extends BaseController {
    constructor() {
        super("api/Dogs");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .delete("/:id", this.delete)
    }

    /**
     * Sends found dogs to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            const dogs = dogsService.find()
            return res.send(dogs);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Creates a value from request body and returns it
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async create(req, res, next) {
        try {
            const value = await dogsService.create(req.body)
            res.send(value);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const dog = await dogsService.findDog(req.params.id)
            res.send(dog)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            const dog = await dogsService.delete(req.params.id)
            res.send(dog)
        } catch (error) {
            next(error)
        }
    }
}