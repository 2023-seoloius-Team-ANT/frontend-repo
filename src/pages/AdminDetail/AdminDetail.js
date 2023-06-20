import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './admindetail.css';

function LinkedExample() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <div className="adminwholething">
      <h1 id="admintitlek">
        <Badge bg="secondary">요양사 회원관리</Badge>
      </h1>
      <ListGroup className="padmindetail" defaultActiveKey="#link1">
        <ListGroup.Item className="admindetail1" action href="#link1">
          요양사 1
        </ListGroup.Item>
        <ListGroup.Item className="admindetail1" action href="#link2">
          요양사 2
        </ListGroup.Item>
        <ListGroup.Item className="admindetail1" action href="#link3">
          요양사 3
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default LinkedExample;
