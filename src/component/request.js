import Reqcnt from "./reqcnt";

const Request = (props)=>{
  return(
    <>
       <div className="request">
        <Reqcnt goren={props.goren}/>
      </div>
    </>
  )
}
export default Request;