import { getAllTrucks, getTruckById } from "../../controllers/trucksController";
import { Router } from "express";

const employeesRoutes = (): Router => {
    const router = Router()

    router.get("/", getAllTrucks)

    router.get("/:id", getTruckById)

    return router
}

export default employeesRoutes