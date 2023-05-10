import IDictionary from "./IDictionary";

export default interface Post {
    Src: string;
    Body: string;
    body: IDictionary;
    Title: string;
    title: IDictionary;
    Excerpt: string;
    excerpt: IDictionary;
    Id: string;
    File: string;
    Published: string;
}
