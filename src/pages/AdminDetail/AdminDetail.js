import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './admindetail.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from '../../../node_modules/axios/index';
import Jmpagination from './Jmpagination';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Adheader from '../../component/Adminheader/Adheader';

function Kjmadmindetail() {
  const [stanmember, setStanmember] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [memno, setMemno] = useState(0);

  //페이지네이션
  const [limitjm, setLimitjm] = useState(10); //한페이지당 들어갈 인원 수
  const [pagejm, setPagejm] = useState(1);
  const offsetjm = (pagejm - 1) * limitjm; //여러 페이지 중에서 한 페이지를 선택할 시, 그 페이지에 나타나는 첫 인물의 넘버

  useEffect(() => {
    axios.get('/api/v1/admin/caregiver').then((response) => {
      // console.log(response.data.result);
      setStanmember(response.data.result);
    });
  }, []);
  return (
    <div className="adminwholething">
      <Adheader />
      <div className="김지민">
        <div className="김현진">
          <h1 id="titlejm">
            <Badge bg="outline-light" text="dark">
              최종 승인 대기중인 요양사 리스트
            </Badge>
          </h1>
          {/* 페이지 당 표시할 게시물 수에 대한 레이블 */}
          <label>
            페이지 당 표시할 인원수:&nbsp;
            <select
              type="number"
              value={limitjm}
              onChange={({ target: { value } }) => setLimitjm(Number(value))}
            >
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
          </label>
          {/* DB로부터 대기중인 요양사 출력하기 */}
          {stanmember.length > 0 ? (
            <ListGroup className="detailjm" defaultActiveKey="#link1">
              <table className="table table-hover" style={{ fontSize: '23px' }}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">이름</th>
                    <th scope="col">나이</th>
                    <th scope="col">성별</th>
                  </tr>
                </thead>
                <tbody className="전다연">
                  {stanmember
                    .slice(offsetjm, offsetjm + limitjm)
                    .map((a, index) => {
                      return (
                        <tr
                          key={
                            stanmember.slice(offsetjm, offsetjm + limitjm)[
                              index
                            ].careno
                          }
                          onClick={() => {
                            setModalShow(true);
                            setMemno(index + offsetjm);
                          }}
                        >
                          <th>{index + 1 + offsetjm}</th>
                          <td>
                            {
                              stanmember.slice(offsetjm, offsetjm + limitjm)[
                                index
                              ].name
                            }
                          </td>
                          <td>
                            {
                              stanmember.slice(offsetjm, offsetjm + limitjm)[
                                index
                              ].age
                            }
                          </td>
                          <td>
                            {stanmember.slice(offsetjm, offsetjm + limitjm)[
                              index
                            ].gender == 0
                              ? '남성'
                              : '여성'}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <MyVerticallyCenteredModal
                stanmember={stanmember}
                memno={memno}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ListGroup>
          ) : null}
          <footer>
            <Jmpagination
              totaljm={stanmember.length}
              limitjm={limitjm}
              pagejm={pagejm}
              setPagejm={setPagejm}
            />
          </footer>
        </div>
      </div>
    </div>
  );
}

//여기서부터 컴포넌트들
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">상세정보</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="indidetail">
          <div className="indidetail1">
            이름: {props.stanmember[props.memno].name}{' '}
          </div>
          <div className="indidetail2">
            <span>나이: {props.stanmember[props.memno].age}</span>
            <span>
              성별:
              {props.stanmember[props.memno].gender == 0 ? '남성' : '여성'}
            </span>
          </div>
          <div className="indidetail3">
            <span>{props.stanmember[props.memno].char1}&nbsp;</span>
            <span>{props.stanmember[props.memno].char2}&nbsp;</span>
            <span>{props.stanmember[props.memno].char3}&nbsp;</span>
          </div>
        </div>
        <Indipicture stanmember={props.stanmember} memno={props.memno} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            axios
              .put(
                `/api/v1/admin/${props.stanmember[props.memno].careno}/accept`,
              )
              .then(() => {
                alert('승인이 완료되었습니다.');
                window.location.reload();
              });
            //.finally(props.onHide);
          }}
        >
          승인
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            axios
              .put(
                `/api/v1/admin/${props.stanmember[props.memno].careno}/decline`,
              )
              .then(() => {
                alert('승인이 거절되었습니다.');
                window.location.reload();
              });
            //.finally(props.onHide);
          }}
        >
          거절
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Indipicture(props) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <img src={props.stanmember[props.memno].profile} />
        </Col>
      </Row>
    </Container>
  );
}

export default Kjmadmindetail;
