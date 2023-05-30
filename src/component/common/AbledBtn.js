import styled from 'styled-components';

const StyledBtn = styled.button`
  background: #ffffff;
  border: 6px solid #fd3a69;
  border-radius: 15px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  text-align: center;
  width: 48%;
  height: 100%;
`;

const AbledBtn = (props) => <StyledBtn {...props} />;

export default AbledBtn;
