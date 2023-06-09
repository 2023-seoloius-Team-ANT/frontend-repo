import React from "react";
import DropdownMenu from "./DropdownMenu";
import "./DropdownMenuData.css";
const DropdownMenuData = (props) => {
  const Year = [
    { value: null, label: "년도" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
  ];
  const Month = [
    { value: null, label: "월" },
    { value: "1", label: "01" },
    { value: "2", label: "02" },
    { value: "3", label: "03" },
    { value: "4", label: "04" },
    { value: "5", label: "05" },
    { value: "6", label: "06" },
    { value: "7", label: "07" },
    { value: "8", label: "08" },
    { value: "9", label: "09" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];

  const handleSelectYear = (Year) => {
    props.changeYear(Year);
  };
  const handleSelectMonth = (Month) => {
    props.changeMonth(Month);
  };

  return (
    <div className="ddmData">
      <DropdownMenu options={Year} onSelect={handleSelectYear} />
      /
      <DropdownMenu options={Month} onSelect={handleSelectMonth} />
    </div>
  );
};

export default DropdownMenuData;
