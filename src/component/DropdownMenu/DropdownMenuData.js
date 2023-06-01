import React from "react";
import DropdownMenu from "./DropdownMenu";
import "./DropdownMenuData.css";
const DropdownMenuData = () => {
  const Year = [
    { value: null, label: "년도" },
    { value: "1", label: "2023" },
    { value: "2", label: "2024" },
    { value: "3", label: "2025" },
    { value: "4", label: "2026" },
    { value: "5", label: "2027" },
  ];
  const Month = [
    { value: null, label: "월" },
    { value: "01", label: "01" },
    { value: "02", label: "02" },
    { value: "03", label: "03" },
    { value: "04", label: "04" },
    { value: "05", label: "05" },
    { value: "06", label: "06" },
    { value: "07", label: "07" },
    { value: "08", label: "08" },
    { value: "09", label: "09" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];

  const handleSelect = (value) => {
    console.log("선택된 값:", value);
  };

  return (
    <div className="ddmData">
      <DropdownMenu options={Year} onSelect={handleSelect} />
      /
      <DropdownMenu options={Month} onSelect={handleSelect} />
    </div>
  );
};

export default DropdownMenuData;
