import "./UserGPS.css";

const UserGPS = (props) => {
  return (
    <div className="UserGPSWrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-geo-alt-fill"
        viewBox="0 0 16 16"
        className="mark"
      >
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>

      <span>{props.address}</span>
    </div>
  );
};

export default UserGPS;
