import React from "react";
import * as Validator from "validatorjs";
import "bootstrap/dist/css/bootstrap.min.css";

Validator.register("equals", (value, requirement, attribute) => {
  if (value !== requirement) {
    return `The ${attribute} must be equal to ${requirement}.`;
  }
  return true;
});

const Input = ({ Label, type, name, onChange }) => {
  return (
    <div className="form-group">
      <label> {Label}:</label>
      <input className="form-control" type={type} name={name} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

const ShowErrors = ({ errors }) => {
  return (
    <div>
      {errors.length > 0 && (
        <div className="alert alert-danger" role="alert">
          <ul className="list-unstyled mb-0">
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

class Validation extends React.Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { fullname, username, email, password, confirmpassword } = this.state;

    alert(`
            Full Name: ${this.state.fullname}
            Username: ${this.state.username}
            Email: ${this.state.email}
            Password: ${this.state.password}
            Confirm Password : ${this.state.confirmpassword}
            
        `);

    let data = { fullname, username, email, password, confirmpassword };

    let rules = {
      fullname: "required",
      username: "required",
      email: "required|email",
      password: "required|min:8",
      confirmpassword: "required|equals:password",
    };

    let validation = new Validator(data, rules);
    validation.passes();
    let validationSuccess = !validation.fails(); // variabel untuk mengecek apakah validasi berhasil
    if (validationSuccess && !this.state.errors.length) {
      // ubah kondisi pada if statement
      console.log("Validasi berhasil");
      this.setState({
        success: true,
        errors: [],
      });
      alert("Congratulations! Your registration has been successful.");
    } else {
      this.setState({
        errors: [...validation.errors.get("fullname"), ...validation.errors.get("username"), ...validation.errors.get("email"), ...validation.errors.get("password"), ...validation.errors.get("confirmpassword")],
      });
      console.log(validation.errors.all());
    }
  };

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     const { fullname, username, email, password, confirmpassword } = this.state;

  //     let data = { fullname, username, email, password, confirmpassword };

  //     let rules = {
  //       fullname: "required",
  //       username: "required",
  //       email: "required|email",
  //       password: "required|min:8",
  //       confirmpassword: "required|equals:password",
  //     };

  //     let validation = new Validator(data, rules);
  //     validation.passes();
  //     if (validation.fails()) {
  //       this.setState({
  //         errors: [...validation.errors.get("fullname"), ...validation.errors.get("username"), ...validation.errors.get("email"), ...validation.errors.get("password"), ...validation.errors.get("confirmpassword")],
  //       });
  //       console.log(validation.errors.all());
  //     } else {
  //       console.log("Validasi berhasil");
  //       this.setState({
  //         success: true,
  //         errors: [],
  //       });
  //       if (this.state.success) {
  //         alert("Congratulations! Your registration has been successful.");
  //         alert(`
  //         Full Name: ${this.state.fullname}
  //         Username: ${this.state.username}
  //         Email: ${this.state.email}
  //         Password: ${this.state.password}
  //         Confirm Password : ${this.state.confirmpassword}

  //     `);
  //       }
  //     }
  //   };

  render() {
    const style = {
      width: "700px",
      margin: "100px auto 0",
      border: "1px solid black",
      padding: "15px",
      // border-radius: '3px',
    };
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5" style={style}>
              <div className="card-body">
                {this.state.errors.length > 0 && <ShowErrors errors={this.state.errors} />}

                {this.state.success && (
                  <div className="alert alert-success" role="alert">
                    Congratulations! Your registration has been successful.
                  </div>
                )}

                <h3 className="card-title text-center mb-4">REGISTRATION FORM</h3>
                <form onSubmit={this.handleSubmit}>
                  <Input type="text" name="fullname" Label="Full Name" onChange={(value) => this.setState({ fullname: value })} />
                  <Input type="text" name="username" Label="Username" onChange={(value) => this.setState({ username: value })} />
                  <Input type="email" name="email" Label="Email address" onChange={(value) => this.setState({ email: value })} />
                  <Input type="password" name="password" Label="Password" onChange={(value) => this.setState({ password: value })} />
                  <Input type="password" name="confirmpassword" Label="Confirm Password" onChange={(value) => this.setState({ confirmpassword: value })} />

                  <button type="submit" className="btn btn-primary btn-block mt-4">
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Validation;
