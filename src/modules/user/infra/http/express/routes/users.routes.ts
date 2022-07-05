import { celebrate, Joi } from "celebrate";
import { Router } from "express";
import CreateUserService from "../../../../services/CreateUserService";

const usersRoutes = Router();

usersRoutes.post(
  "/create",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(8).required(),
    }),
  }),
  async (request, response) => {
    const { name, email, password } = request.body;

    const service = new CreateUserService();

    const user = await service.execute({ name, email, password });

    return response.json(user);
  }
);

export default usersRoutes;
