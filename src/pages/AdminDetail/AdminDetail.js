import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './admindetail.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from '../../../node_modules/axios/index';

function Kjmadmindetail() {
  const [stanMember, setStanMember] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/admin/caregiver')
      .then((response) => {
        // const newkjm = JSON.stringify(response.data.result);
        console.log(response.data.result);
        setStanMember(response.data.result);
      })
      .finally(() => {
        // console.log(stanMember);
      });
  }, []);
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  // const [modalShow, setModalShow] = React.useState(false);

  const [memNo, setMemNo] = useState(0);

  return (
    <div className="adminwholething">
      <h1 id="titlejm">
        <Badge bg="dark" text="light">
          최종 승인 대기중인 요양사 리스트
        </Badge>
      </h1>
      {/* {stanMember[0].name} */}
      {/* <ListGroup className="detailjm" defaultActiveKey="#link1">
        {stanMember.map((a, i) => {
          return (
            <Button
              key={i}
              className="detailjm1"
              variant="outline-dark"
              onClick={() => {
                setModalShow(true);
                setMemNo(i);
              }}
            >
              {stanMember[i].name}
            </Button>
          );
        })}

        <MyVerticallyCenteredModal
          stanMember={stanMember}
          memNo={memNo}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ListGroup> */}
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.stanMember[props.memNo].name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.stanMember[props.memNo].name} 상세정보</h4>
        <p>친절한 요양사의 기준</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          승인
        </Button>
        <Button variant="dark" onClick={props.onHide}>
          거절
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Kjmadmindetail;
