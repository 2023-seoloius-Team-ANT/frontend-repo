import './UserSelectBtn.scss';


const UserSelectBtn = (props) =>{
    return(
        <>
            <input 
                type="button" 
                name="userType"
                value={props.name} 
                className={props.type ? "AbledBtn" : "DisabledBtn"} 
                id={props.color === "pink" ? "pinkBtn" : "greenBtn"}
                onClick = { props.onClick }
                />

        </>
    );
}

export default UserSelectBtn;