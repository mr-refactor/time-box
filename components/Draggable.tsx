import { ReactNode, FunctionComponent as FC } from "react";

interface Props {
  children: ReactNode;
}

export const Draggable: FC<Props> = ({ children }) => {
  return <div draggable>{children}</div>;
};
