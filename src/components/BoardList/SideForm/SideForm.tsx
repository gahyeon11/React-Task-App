import React, { ChangeEvent, FC, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { iconStyle, input, sideForm } from "./SideForn.css";
import { useDispatch } from "react-redux";
import { addBoard } from "../../../store/slices/boardsSlice";
import { addLog } from "../../../store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";

type TSideFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
};
const SideForm: FC<TSideFormProps> = ({ setIsFormOpen, inputRef }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleOnBlur = () => {
    setIsFormOpen(false);
  };
  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({
          board: {
            boardId: uuidv4(),
            boardName: inputText,
            lists: [],
          },
        })
      );
      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: `${inputText} 게시판이 등록되었습니다.`,
          logAuthor:"User",
          logTimestamp: String(Date.now())
        })
      )
    }
  };
  return (
    <div className={sideForm}>
      <input
        type="text"
        // ref = {inputRef}
        autoFocus
        className={input}
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={hadleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={iconStyle} onMouseDown={handleClick} />
    </div>
  );
};

export default SideForm;
