import './UserSelectBtn.scss';


const UserSelectBtn = (props) =>{
    return(
        <>
            <input 
                type="button" 
                name="userType"
                value={props.name} 
                className={props.type ? "AbledBtn" : "DisabledBtn"} 
                id={props.name === "고령자" ? "seniorBtn" : "careBtn"}
                onClick = { props.onClick }
                />

        </>
    );
}

export default UserSelectBtn;