/* eslint-disable */
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './admindetail.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from '../../../node_modules/axios/index';
// import Pagination from 'react-js-pagination';
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

  const [limitjm, setLimitjm] = useState(10);
  const [pagejm, setPagejm] = useState(1);
  const offsetjm = (pagejm - 1) * limitjm;

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
          <label id="nopeopleperpage">
            페이지 당 표시할 인원수:&nbsp;
            <select
              type="number"
              value={limitjm}
              onChange={({ target: { value } }) => setLimitjm(Number(value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </label>
          {/* DB로부터 대기중인 요양사 출력하기 */}
          {stanmember.length > 0 ? (
            <ListGroup className="detailjm" defaultActiveKey="#link1">
              <div className="ohji">
                <table
                  className="table table-hover"
                  style={{ fontSize: '23px' }}
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '20%' }}>
                        #
                      </th>
                      <th scope="col" style={{ width: '30%' }}>
                        이름
                      </th>
                      <th scope="col" style={{ width: '30%' }}>
                        나이
                      </th>
                      <th scope="col" style={{ width: '30%' }}>
                        성별
                      </th>
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
              </div>
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
      <Modal.Header
        className="parentdetailinfo"
        style={{ height: '80px', letterSpacing: '3px' }}
        closeButton
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            fontSize: '30px',
            fontWeight: '800',
            width: '100%',
            textAlign: 'center',
          }}
        >
          상세정보
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="indidetail">
            <Indipicture stanmember={props.stanmember} memno={props.memno} />
            <div className="indidetailtable">
              <div className="indidetail21">
                <span className="indidetail1">이름 : </span>
                <span className="indidetail11">
                  {props.stanmember[props.memno].name}
                </span>
              </div>

              <div className="indidetail21">
                <span>
                  나이 : {props.stanmember[props.memno].age}&nbsp;&nbsp;
                </span>
                <span>
                  성별 :{' '}
                  {props.stanmember[props.memno].gender == 0
                    ? ' 남성'
                    : ' 여성'}
                </span>
              </div>

              <div className="indidetail21">
                <span>
                  근무시간 : {props.stanmember[props.memno].workTime}
                  &nbsp;&nbsp;
                </span>
                <span>
                  근무요일 : 주 {props.stanmember[props.memno].workday}일
                </span>
              </div>

              <div className="indidetail21">
                <span>자신을 표현할 키워드 : &nbsp;</span>
                <span className="charjm">
                  #{props.stanmember[props.memno].char1}&nbsp; #
                  {props.stanmember[props.memno].char2}&nbsp; #
                  {props.stanmember[props.memno].char3}&nbsp;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="etcinfojm">
          <div className="etcinfoaddress">
            <span className="smalladd">주소</span> :{' '}
            {props.stanmember[props.memno].address}{' '}
          </div>
          <div className="etcinfotel">
            <span className="smalladd">전화번호</span> :{' '}
            {props.stanmember[props.memno].tel}{' '}
          </div>
          <div className="etcinforegdate">
            <span className="smalladd">가입일</span> :{' '}
            {props.stanmember[props.memno].regdate}{' '}
          </div>
          <div className="etcinfoexp">
            <span className="smalladd">경력</span> :{' '}
            {props.stanmember[props.memno].exp}{' '}
          </div>
          <div className="etcinfogoal">
            <span className="smalladd">목표</span> :{' '}
            {props.stanmember[props.memno].goal}{' '}
          </div>
          <div className="etcinfogood">
            <span className="smalladd">장점</span> :{' '}
            {props.stanmember[props.memno].good}{' '}
          </div>
          <div className="etcinfoservice">
            <span className="smalladd">제공가능한 서비스</span> :{' '}
            {props.stanmember[props.memno].service}{' '}
          </div>
          <div className="etcinfointro">
            <span className="smalladd">자기소개</span> :{' '}
            {props.stanmember[props.memno].info}{' '}
          </div>
          <div className="indicertifiimage">
            <span className="smalladd">자격증 인증 사진</span>
          </div>
          <img
            className="sigwon"
            src={props.stanmember[props.memno].certiImage}
          />
        </div>
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
    <Container className="indipicture" style={{ width: '30%' }}>
      <Row>
        <Col xs={6} md={4}>
          <img src={props.stanmember[props.memno].profile} />
        </Col>
      </Row>
    </Container>
  );
}

export default Kjmadmindetail;
