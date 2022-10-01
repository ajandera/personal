import Post from "~/model/Post";
import File from "~/model/File";

export default interface IResponsePosts {
    data: {
      success: boolean,
      post: Post,
      posts: Post[],
      files: File[],
      message: string,
      error: string
    }
}
