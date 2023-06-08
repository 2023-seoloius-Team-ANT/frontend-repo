import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: ${(props) => {
    if (props.color === 'pink') return '#fd3a69';
    else return '#A9D196';
  }};
  border-radius:5px;
  height: 44px;
  width: 95%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  border: none;
  margin-bottom: 20px;
`;

const SignBtn = (props) => (
  <StyledBtn onClick={props.onClick} type={props.type} color={props.color} {...props} />
);

export default SignBtn;
