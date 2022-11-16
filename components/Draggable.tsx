import { ReactNode, FunctionComponent as FC, DragEventHandler } from "react";

interface Props {
  children: ReactNode;
  onDragStart: DragEventHandler;
  onDragEnter: DragEventHandler;
}

export const Draggable: FC<Props> = ({
  children,
  onDragStart,
  onDragEnter,
}) => {
  return (
    <div
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      className="draggable"
      draggable
    >
      {children}
    </div>
  );
};
