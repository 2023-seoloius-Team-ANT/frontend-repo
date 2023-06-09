import { useLocation } from "react-router-dom";
import ApplyModalBtn from "../../component/Btn/ApplyModalBtn";
import DetailBtn from "../../component/Btn/DetailBtn";
import HelperDetail from "../../component/HelperDetail/HelperDetail";
import "./HelperProfilePage.css";
import Template from "../../component/Template";

const HelperProfilePage = () => {
  const location = useLocation();
  const sch = location.search;
  const params = new URLSearchParams(sch);
  const careno = params.get("careno");
  const year = params.get("year");
  const month = params.get("month");
  const careName = params.get("careName");

  return (
    <Template>
      <div className="helperPfWrapper">
        <HelperDetail careno={careno}></HelperDetail>
        <DetailBtn careno={careno} year={year} month={month}></DetailBtn>

        <ApplyModalBtn
          careno={careno}
          year={year}
          month={month}
          careName={careName}
        ></ApplyModalBtn>
      </div>
    </Template>
  );
};

export default HelperProfilePage;
