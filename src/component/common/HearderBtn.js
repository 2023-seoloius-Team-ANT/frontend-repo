import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #455a64;
  border-radius: 10px;
  height: 40px;
  width: 100px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  border: none;
`;

const HeaderBtn = (props) => <StyledBtn {...props} />;

export default HeaderBtn;
