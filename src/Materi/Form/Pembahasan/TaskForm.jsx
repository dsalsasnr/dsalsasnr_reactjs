// import React, { useState } from "react";
// import * as Validator from "validatorjs";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Alert } from "bootstrap";

// const Input = ({ label, type, name, value, onChange, error }) => {
//   return (
//     <div>
//       <label> {label}:</label>
//       <br />
//       <input type={type} name={name} value={value} onChange={(e) => onChange(e.target.value)} className={`form-control ${error && "is-invalid"}`} />
//       {error && <div className="invalid-feedback">{error}</div>}
//       <br />
//     </div>
//   );
// };

// const ShowErrors = ({ errors }) => {
//   return (
//     <ul style={{ color: "red", marginLeft: "-20px" }}>
//       {errors.map((error, i) => (
//         <li key={i}> {error} </li>
//       ))}
//     </ul>
//   );
// };

// export default class Validation extends React.Component {
//   state = {
//     fullname: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     errors: [],
//     hasError: false,
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const [show, setShow] = useState(true);

//     if (show) {
//       <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//         <p>
//           (` fullname: ${this.state.fullname}
//           username: ${this.state.username}
//           email: ${this.state.email}
//           password: ${this.state.password}
//           confirmpassword: ${this.state.confirmPassword} `);
//         </p>
//       </Alert>;
//       alert(`
//           fullname: ${this.state.fullname}
//           username: ${this.state.username}
//           email: ${this.state.email}
//           password: ${this.state.password}
//           confirmpassword: ${this.state.confirmPassword}
//           `);
//     }

//     const { fullname, username, email, password, confirmPassword } = this.state;

//     let data = { fullname, username, email, password, confirmPassword };

//     let rules = {
//       fullname: "required",
//       username: "required",
//       email: "required|email",
//       password: "min:8|required",
//       confirmPassword: "required|same:password",
//     };

//     let validation = new Validator(data, rules);
//     validation.passes();
//     this.setState({
//       errors: [...validation.errors.get("fullname"), ...validation.errors.get("username"), ...validation.errors.get("email"), ...validation.errors.get("password"), ...validation.errors.get("confirmPassword")],
//     });
//   };

//   render() {
//     const { errors } = this.state;

//     return (
//       <div className="container mt-5">
//         {this.state.errors.length > 0 && <ShowErrors errors={this.state.errors} />}
//         <div className="alert alert-danger" role="alert">
//           <strong>Errors:</strong> Please fix the following errors before submitting the form.
//         </div>
//         <h1>REGISTRATION FORM</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input type="text" className={`form-control ${errors.fullname && "is-invalid"}`} id="fullname" onChange={(value) => this.setState({ fullname: value })} value={this.state.value} />

//             {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input type="username" className={`form-control ${errors.username && "is-invalid"}`} id="username" onChange={(value) => this.setState({ username: value })} value={this.state.value} />
//             {errors.username && <div className="invalid-feedback">{errors.username}</div>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" className={`form-control ${errors.email && "is-invalid"}`} id="email" onChange={(value) => this.setState({ email: value })} value={this.state.value} />
//             {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" className={`form-control ${errors.password && "is-invalid"}`} id="password" onChange={(value) => this.setState({ password: value })} value={this.state.value} />
//             {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input type="password" className={`form-control ${errors.confirmPassword && "is-invalid"}`} id="confirmPassword" onChange={(value) => this.setState({ confirmPassword: value })} value={this.state.value} />
//             {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
//           </div>
//           <br />
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
