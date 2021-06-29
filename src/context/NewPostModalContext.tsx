import { ReactNode, createContext, useState } from "react";

interface NewPostModalContexData {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface NewPostModalProviderProps {
  children: ReactNode;
}

export const NewPostModalContext = createContext({} as NewPostModalContexData);

export function NewPostModalProvider({ children }: NewPostModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return (
    <NewPostModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </NewPostModalContext.Provider>
  );
}
