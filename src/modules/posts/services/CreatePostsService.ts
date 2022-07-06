import DataSourceTypeorm from "../../shared/infra/typeorm/database/dataSource";
import ICreatePostsDTO from "../dtos/ICreatePostsDTO";
import Posts from "../infra/typeorm/entities/Posts.entity";

export default class CreatePostsService {
  public async execute({ content, title, user_id }: ICreatePostsDTO) {
    const postsRepository = DataSourceTypeorm.manager.getRepository(Posts);

    const post = await postsRepository.save(
      postsRepository.create({ title, content, user_id })
    );

    return post;
  }
}
