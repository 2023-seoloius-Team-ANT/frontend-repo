import { useEffect } from 'react';
import './Adminmodal.css';
function AdminModal(props) {
    const { setModalOpen, setId, title, content, writer } = props;
  
    // 모달 끄기
    const closeModal = () => {
      setModalOpen(false);
    };

    useEffect(() => {


    },[])
  
    return (
    <div className='modalwrap'>
      <div className="modalcont">
        <button className="modalclose" onClick={closeModal}>
          X
        </button>
        <p>모달창입니다.</p>
      </div>
    </div>
    );
  }
  
  export default AdminModal;
  