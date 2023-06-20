import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './admindetail.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Kjmadmindetail() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  let [stanMember, setStanMember] = useState(['김민수', '박영우']);
  let [memNo, setMemNo] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="adminwholething">
      <h1 id="titlejm">
        <Badge bg="primary" text="light">
          대기중인 요양사 리스트
        </Badge>
      </h1>
      <ListGroup className="detailjm" defaultActiveKey="#link1">
        {stanMember.map((a, i) => {
          return (
            <Button
              key={i}
              className="detailjm1"
              variant="outline-primary"
              onClick={() => {
                setModalShow(true);
                setMemNo(i);
              }}
            >
              {stanMember[i]}
            </Button>
          );
        })}

        <MyVerticallyCenteredModal
          stanMember={stanMember}
          memNo={memNo}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ListGroup>
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
          {props.stanMember[props.memNo]}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.stanMember[props.memNo]} 상세정보</h4>
        <p>친절한 요양사의 기준</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          승인
        </Button>
        <Button onClick={props.onHide}>거절</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Kjmadmindetail;
