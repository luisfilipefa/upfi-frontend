import { Container } from "./styles";
import { FiThumbsUp } from "react-icons/fi";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

interface LikesCounterProps {
  postId: string;
  likes: string[];
}

export function LikesCounter(props: LikesCounterProps) {
  const { user } = useAuth();
  const [likes, setLikes] = useState(props.likes);

  const handleLikePost = async () => {
    const { data } = await api.patch(`/post/${props.postId}`);

    setLikes(data.likes);
  };

  return (
    <Container
      iconBg={likes.some((like) => like === user.id) && "var(--gray-50)"}
    >
      <span onClick={handleLikePost}>
        {likes.length} <FiThumbsUp />
      </span>
    </Container>
  );
}
