import File from "~/model/File";

export default interface IResponseFiles {
    data: {
      success: boolean,
      files: File[],
      message: string,
      error: string
    }
}
