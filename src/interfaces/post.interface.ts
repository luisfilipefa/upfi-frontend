import { IUser } from "./user.interface";

export interface IPost {
  id: string;
  title: string;
  image: string;
  likes: string[];
  author: Pick<IUser, "id" | "avatar" | "custom_username">;
  created_at: string;
}
