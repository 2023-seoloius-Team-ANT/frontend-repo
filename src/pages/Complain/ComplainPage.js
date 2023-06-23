import { useState, useEffect } from 'react';
import './ComplainPage.scss'
import ComplainModalBody from './ComplainModal';
import Adheader from '../../component/Adminheader/Adheader';
import axios from '../../../node_modules/axios/index';
import './Paging.css'
import Pagination from 'react-js-pagination';

const ComplainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[clicknum, setClickNum] = useState(0);

    const[complains, setComplains] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const closeModal = e => {
        setIsOpen(e);
    } 

    const openModal = (num) => {
        setIsOpen(true);
        setClickNum(num)
        console.log(num)
    }

    useEffect(() => {
        axios.get('/api/v1/complain').then(response => {
            setComplains(response.data.result);
        });
        console.log(complains)
    },[]);

    
    const handlePageChange = page => {
          setPage(page);
    };


  return (
      <div className='biggest'>
    <Adheader/>
    <div className='complainWrapper'>
        <div className='compalinContentWrapper'>
        <p className='compalinTitle'>고객 불만사항 관리</p>
        <div className='CPtable'>
            <table class="table table-hover" style={{width: "95%", fontSize: "23px"}}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">내용</th>
                    <th scope="col">신고자</th>
                    <th scope="col">신고일</th>
                    </tr>
                </thead>
                <tbody>
                {complains.slice(offset, offset+limit).map(({id, complainUser, date, content }, i) => (
                        <tr onClick={() => {openModal(i)}} style={{cursor:"pointer"}}>
                            <th style={{width: "6%"}}>{((page-1)*limit) +i+1}</th>
                            <td style={{width: "50%"}}>{content.length >20 ? content.substr(0, 20) + "..." : content}</td>
                            <td style={{width: "10%"}}>{complainUser}</td>
                            <td style={{width: "10%"}}>{date}</td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        <Pagination 
            activePage={page}
            itemsCountPerPage={limit} // 한페이지씩 보여줄 아이템 갯수
            totalItemsCount={complains.length}
            pageRangeDisplayed={10}
            prevPageText="<"
            nextPageText=">"
            onChange={handlePageChange}
        />
        
        {
            isOpen &&
            <ComplainModalBody complainno = {complains[clicknum].complainno} nickname={complains[clicknum].complainUser} date={complains[clicknum].date} content={complains[clicknum].content} closeModal = {closeModal}  />
        }
        
    </div>
    </div>
    </div>
  )
};


export default ComplainPage;
