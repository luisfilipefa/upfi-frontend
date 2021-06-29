import { GetServerSideProps } from "next";
import Head from "next/head";
import { IPost } from "../interfaces/post.interface";
import { PostItem } from "../components/PostItem";
import { PostList } from "../components/PostList";
import { api } from "../services/api";

interface HomeProps {
  posts: IPost[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Upfi</title>
      </Head>

      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </PostList>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: posts } = await api.get("/post");

  return {
    props: { posts },
  };
};
