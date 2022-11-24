import { ReactNode, FunctionComponent as FC, DragEventHandler } from "react";

interface Props {
  children?: ReactNode;
  onDragStart?: DragEventHandler;
  onDragEnter?: DragEventHandler;
  onDragEnd?: DragEventHandler;
}

export const Draggable: FC<Props> = ({
  children,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  return (
    <div
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      className="draggable"
      draggable
    >
      {children}
    </div>
  );
};
