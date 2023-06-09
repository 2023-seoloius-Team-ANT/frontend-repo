import { useState } from 'react';
import Template from '../component/Template';
import SignBtn from '../component/common/button/SignBtn';
import CaregiverInfoWrite from '../component/write/CaregiverInfoWrite';
import './CaregiverInfoPage.scss';
import NoticeModal from '../component/write/NoticeModal';
import { useSearchParams } from '../../node_modules/react-router-dom/dist/index';

const CaregiverInfoPage = () => {
  const [completeModal, setCompleteModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const opencompleteModal = () => {
    setCompleteModal(true);
  };
  return (
    <Template>
      <div className="careWriteDescription">
        <div className="title">내 정보</div>
        <div> 신청인에게 보일 프로필을 설정해주세요.</div>
        <div> 불성실한 대답은 신청 반려 사유가 될 수 있습니다.</div>
      </div>
      <CaregiverInfoWrite careno={searchParams.get("careno")} opencompleteModal={opencompleteModal} />
      {completeModal && <NoticeModal />}
    </Template>
  );
};

export default CaregiverInfoPage;
