import React, { ChangeEvent, FC, useState } from 'react'
import { FiCheck } from 'react-icons/fi';

type TSideFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
}
const SideForm: FC<TSideFormProps> = ({
  setIsFormOpen,
  inputRef
}) => {
  const [inputText, setInputText] = useState('');

  const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }
  const handleOnBlur = ()=>{
    setIsFormOpen(false);
  }
  return (
    <div>
      <input type="text" 
      // ref = {inputRef}
      autoFocus
      placeholder='새로운 게시판 등록하기' 
      value={inputText}
      onChange={hadleChange}
      onBlur={handleOnBlur}
      />
      <FiCheck/>
    </div>
  )
}

export default SideForm