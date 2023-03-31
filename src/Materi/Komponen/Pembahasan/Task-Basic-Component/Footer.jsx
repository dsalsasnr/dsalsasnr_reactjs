// class component
import React from "react";

class MyFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>
          {" "}
          Ini Footer <br />
          {this.props.paragraph()}{" "}
        </h3>
      </div>
    );
  }
}

export default MyFooter;
