import { useState } from 'react';
import './SignUpInput.scss';

const TOSIN_DATA = [
    { id: null, value: '통신사를 선택해주세요..' },
    { id: '1', value: 'SKT' },
    { id: '2', value: 'KT' },
    { id: '3', value: 'U+' },
    { id: '4', value: '알뜰폰' },
  ];

const SignUpInput = (props) => {
    const[value, setValue] = useState("");

    const valueChange = e => {
        setValue(e.target.value);
    };

    return(
        <div className="inputTemplate">
            <img src={process.env.PUBLIC_URL+`/images/${props.img}.png`} alt="" id="inputImg"/>
            <input 
                className='signUpInput'
                type={props.type}
                name={props.name} 
                value={value} 
                onChange={valueChange} 
                placeholder={props.placeholder} 
            />
            {
                props.img === "phoneIcon" && (
                    <select className='userTelType'>
                    {TOSIN_DATA.map(el => {
                        return <option key={el.id}>{el.value}</option>;
                        })}
                    </select>
                )
            }

        </div>
    )
    }
export default SignUpInput;
