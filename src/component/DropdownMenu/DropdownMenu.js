import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DropdowMenu.scss";

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
        width: "292px",
        height: "81px",
        paddingleft: "24px",
        fontfamily: "Inter",
        fontstyle: "normal",
        fontweight: "400",
        fontsize: "40px",
        lineheight: "48px",
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
