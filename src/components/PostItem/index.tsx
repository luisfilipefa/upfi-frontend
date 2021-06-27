import { Container, PostInfo } from "./styles";

import Image from "next/image";
import { Post } from "../../interfaces/post.interface";

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Container>
      <Image
        src={post.image}
        alt={post.title}
        width="350px"
        height="350px"
        objectFit="cover"
      />
      <PostInfo>
        <p>{post.title}</p>
        <div>
          <p>{post.author.custom_username}</p>
        </div>
      </PostInfo>
    </Container>
  );
}
