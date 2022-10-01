import File from "~/model/File";

export default interface IResponseFiles {
    data: {
      success: boolean,
      files: File[],
      file: File,
      message: string,
      error: string
    }
}
