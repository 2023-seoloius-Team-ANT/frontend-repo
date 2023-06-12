import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 드롭다운 컴포넌트
const DropdowMenu = ({ options, onSelect }) => {
  // useState로 상태를 관리
  const [isOpen, setIsOpen] = useState("");
  // 셀렉트로 메뉴변경 함수 실행(isOpen 상태를 메뉴 목록에서 선택한 값으로 변경)
  const ddmChange = (event) => {
    const value = event.target.value;
    setIsOpen(value);
    onSelect(value);
  };

  return (
    <select
      className="form-select"
      value={isOpen}
      onChange={ddmChange}
      style={{
        width: "150px",
        height: "50px",
        paddingLeft: "15px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "38px",
        textAlign: "center",
        color: "#000000",
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default DropdowMenu;
