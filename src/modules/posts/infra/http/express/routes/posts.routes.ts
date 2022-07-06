import { celebrate, Joi } from "celebrate";
import { Router } from "express";
import CreatePostsService from "../../../../services/CreatePostsService";

const postsRoutes = Router();

postsRoutes.post(
  "/create/:user_id",
  celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      content: Joi.string().required(),
    }),
    params: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
  async (request, response) => {
    const { title, content } = request.body;

    const { user_id } = request.params;

    const service = new CreatePostsService();

    const post = await service.execute({ title, content, user_id });

    return response.json(post);
  }
);

export default postsRoutes;
