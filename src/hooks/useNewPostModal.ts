import { NewPostModalContext } from "../context/NewPostModalContext";
import { useContext } from "react";

export const useNewPostModal = () => useContext(NewPostModalContext);
