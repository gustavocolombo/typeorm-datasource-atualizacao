import { Router } from "express";
import usersRoutes from "../../../../../user/infra/http/express/routes/users.routes";

const routes = Router();

routes.use('/users', usersRoutes);

export default routes;