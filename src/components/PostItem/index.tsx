import { Container, PostInfo } from "./styles";

import { IPost } from "../../interfaces/post.interface";
import Image from "next/image";
import { LikesCounter } from "../LikesCounter";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";

interface PostItemProps {
  post: IPost;
  showUsername?: boolean;
}

export function PostItem({ post, showUsername = true }: PostItemProps) {
  const { isAuthenticated } = useAuth();

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
          {showUsername && (
            <Link href={`/profile/${post.author.id}`} passHref>
              <a>{post.author.custom_username}</a>
            </Link>
          )}
          {isAuthenticated && (
            <LikesCounter postId={post.id} likes={post.likes} />
          )}
        </div>
      </PostInfo>
    </Container>
  );
}
