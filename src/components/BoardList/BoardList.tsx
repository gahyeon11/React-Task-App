import React, { useState, FC } from "react";
import { useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import {
  addSection,
  addbutton,
  boardItem,
  boardItemActive,
  container,
  title,
} from "./BoardList.css";
import clsx from "clsx";
import { useRef } from "react";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};
const BoardList: FC<TBoardListProps> = ({
  acticeBoardId,
  setActiveBoardId,
}) => {
  const { boardArray } = useTypedSelector((state) => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    inputRef.current?.focus();
  };
  return (
    <div className={container}>
      <div className={title}>게시판:</div>
      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex((b) => b.boardId === acticeBoardId) ===
                index,
            },
            {
              [boardItem]:
                boardArray.findIndex((b) => b.boardId === acticeBoardId) !==
                index,
            }
          )}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle className={addbutton} onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
