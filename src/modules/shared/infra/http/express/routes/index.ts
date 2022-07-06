import { Router } from "express";
import postsRoutes from "../../../../../posts/infra/http/express/routes/posts.routes";
import usersRoutes from "../../../../../user/infra/http/express/routes/users.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/posts", postsRoutes);

export default routes;
