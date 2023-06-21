import { useState, useRef, useEffect } from 'react';
import './ComplainPage.scss'
import ComplainModalBody from './ComplainModal';
import Adheader from '../../component/Adminheader/Adheader';
import axios from '../../../node_modules/axios/index';

const ComplainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[nickname, setNickname] = useState("홍길동"); // 신고자
    const[index, setIndex] = useState(0) // 인덱스
    const[content, setContent] = useState("dd") // 신고내용
    const[date, setDate] = useState("2023-01-01") // 신고일
    const[clicknum, setClickNum] = useState(0);

    const[complains, setComplains] = useState([]);

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


  return (
    <div className='biggest'>
    <Adheader/>
    <div className='complainWrapper'>
        <div className='compalinContentWrapper'>
        <p className='compalinTitle'>고객 불만사항 관리</p>
        
        <table class="table table-hover" style={{width: "95%", fontSize: "20px"}}>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">내용</th>
                <th scope="col">신고자</th>
                <th scope="col">신고일</th>
                </tr>
            </thead>
            <tbody>
            {complains.map((complain,i) => (
                <tr onClick={() => {openModal(i)}}>
                    <th>{i+1}</th>
                    <td>{complains[i].content.length > 20 ? complains[i].content.substr(0, 20) + "..." : complains[i].content}</td>
                    <td>{complains[i].complainUser}</td>
                    <td>{complains[i].date}</td>
                </tr>
            ))}
            </tbody>
            
        </table>
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
