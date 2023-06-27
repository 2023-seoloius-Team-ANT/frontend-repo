
import Top from '../component/top.js';
import Cmpheader from '../component/cmpheader.js';
import CaregiverInfoWrite from '../component/write/CaregiverInfoWrite';
import './CaregiverInfoPage.scss';
import NoticeModal from '../component/write/NoticeModal';
import { useSearchParams } from '../../node_modules/react-router-dom/dist/index';
import { useState } from 'react';
import CareModal from '../component/write/CareModal.js';


function CaregiverMyPage() {
  const [completeModal, setCompleteModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const opencompleteModal = () => {
    setCompleteModal(true);
  };
  return (
    <div className="wrap">
      <Top/>
      <Cmpheader/>
      <CaregiverInfoWrite careno={searchParams.get("careno")} opencompleteModal={opencompleteModal} />
      {completeModal && <CareModal />}
  </div>
  );
}
export default CaregiverMyPage;
