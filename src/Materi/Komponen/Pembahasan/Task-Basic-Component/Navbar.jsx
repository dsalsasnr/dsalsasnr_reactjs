const MyNavbar = (props) => {
  return (
    <div>
      <h2>{props.navHeading}</h2>
      <ul>
        <li>
          {" "}
          <a href="# "> Home </a>{" "}
        </li>
        <li>
          {" "}
          <a href=" #"> About </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#"> Login </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#"> Contact </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#"> {props.navText} </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default MyNavbar;
