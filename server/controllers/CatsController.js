import BaseController from "../utils/BaseController";
import { catsService } from "../services/CatsService";

export class CatsController extends BaseController {
    constructor() {
        super("api/Cats");
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
            const cats = catsService.find()
            return res.send(cats);
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
            const value = await catsService.create(req.body)
            res.send(value);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const cat = await catsService.findCat(req.params.id)
            res.send(cat)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            const cat = await catsService.delete(req.params.id)
            res.send(cat)
        } catch (error) {
            next(error)
        }
    }
}