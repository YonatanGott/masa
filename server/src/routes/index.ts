import { Router } from "express";
//Routes
import trucksRoutes from "./trucks";

const router = (): Router => {
    const router = Router({ mergeParams: true });

    router.use("/trucks", trucksRoutes())

    return router;
};

export default router;
