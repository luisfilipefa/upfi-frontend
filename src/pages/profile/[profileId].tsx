import { GetServerSideProps } from "next";
import Head from "next/head";
import { IPost } from "../../interfaces/post.interface";
import { api } from "../../services/api";

interface ProfileProps {
  posts: IPost[];
}

export default function Profile({ posts }: ProfileProps) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { profileId } = params;

  const { data: posts } = await api.get(`/post/${profileId}`);

  return {
    props: { posts },
  };
};
