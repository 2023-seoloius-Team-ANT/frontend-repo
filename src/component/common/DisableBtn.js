import styled from 'styled-components';

const StyledBtn = styled.button`
  background: #f1f1f1;
  border-radius: 15px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  width: 48%;
  height: 100%;
  border: none;
`;

const DisabledBtn = (props) => <StyledBtn {...props} />;

export default DisabledBtn;
