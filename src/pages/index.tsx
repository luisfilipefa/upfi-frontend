import { GetServerSideProps } from "next";
import { Post } from "../interfaces/post.interface";
import { PostItem } from "../components/PostItem";
import { PostList } from "../components/PostList";
import { api } from "../services/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </PostList>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: posts } = await api.get("/post");

  return {
    props: { posts },
  };
};
