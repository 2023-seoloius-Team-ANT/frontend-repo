import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #fd3a69;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  border: none;
`;

const SignBtn = (props) => <StyledBtn {...props} />;

export default SignBtn;
