import { useNavigate } from "../../node_modules/react-router-dom/dist/index"

const Appbtn=()=>{
  const navigate = useNavigate();
  return(
    <ul>
      <li>
        <button onClick={()=>{navigate('./view')}}>
          <img src="images/상세보기.png" alt=""/>
        </button>
      </li>
      <li>
        <button>
          <img src="images/동그라미.png" alt=""/>
        </button>
      </li>
      <li>
        <button>
          <img src="images/엑스.png" alt=""/>
        </button>
      </li>
    </ul>
  )
}
export default Appbtn;