import { useState, ReactNode, FunctionComponent as FC } from "react";

interface Props {
  children: ReactNode;
}

export const EditableText: FC<Props> = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  return <>{isEditing ? <input></input> : <div>{children}</div>}</>;
};
