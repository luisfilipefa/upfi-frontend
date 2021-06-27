import { User } from "./user.interface";

export interface Post {
  id: string;
  title: string;
  image: string;
  likes: string[];
  author: Pick<User, "id" | "avatar" | "custom_username">;
  created_at: string;
}
