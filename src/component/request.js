import Reqcnt from "./reqcnt";

const Request = (props)=>{
  return(
    <>
       <div className="request">
        <Reqcnt renderVal={props.rederVal}/>
      </div>
    </>
  )
}
export default Request;