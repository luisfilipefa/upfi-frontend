import { GetServerSideProps } from "next";
import Head from "next/head";
import { IPost } from "../../interfaces/post.interface";
import { IUser } from "../../interfaces/user.interface";
import { PostItem } from "../../components/PostItem";
import { PostList } from "../../components/PostList";
import { ProfileCard } from "../../components/ProfileCard";
import { api } from "../../services/api";

interface ProfileProps {
  posts: IPost[];
  profile: IUser;
}

export default function Profile({ posts, profile }: ProfileProps) {
  return (
    <>
      <Head>
        <title>{`${profile.name} | Upfi`}</title>
      </Head>

      <ProfileCard profile={profile} />
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} showUsername={false} />
        ))}
      </PostList>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { profileId } = params;

  const { data: posts } = await api.get(`/post/${profileId}`);

  const { data: profile } = await api.get(`/user/${profileId}`);

  return {
    props: { posts, profile },
  };
};
