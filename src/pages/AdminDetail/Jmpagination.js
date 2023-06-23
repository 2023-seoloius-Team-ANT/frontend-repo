import styled from 'styled-components';

function Jmpagination({ totaljm, limitjm, pagejm, setPagejm }) {
  const numPagesjm = Math.ceil(totaljm / limitjm);

  return (
    <>
      <Nav>
        <Button onClick={() => setPagejm(pagejm - 1)} disabled={pagejm === 1}>
          &lt;
        </Button>
        {Array(numPagesjm)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPagejm(i + 1)}
              aria-current={pagejm === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          onClick={() => setPagejm(pagejm + 1)}
          disabled={pagejm === numPagesjm}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #0d6efd;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Jmpagination;
