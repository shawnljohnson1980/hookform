import React, { useState } from "react";

const UserForm = (props) => {
  const [userName,setuserName]=useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const createUser=(e)=>{
    e.preventDefault();
    console.log(e)
    const newUser={userName,firstName,lastName,email,password,confirmPassword,birthday};
    console.log("welcome",newUser);
     setHasBeenSubmitted( true );
  };
  const formMessage = () => {
    if( hasBeenSubmitted ) {
  return "Thank you for submitting the form!";
} else {
  return "Welcome, please submit the form";
}
};
  return (
    <>
      <form class="mt-5 p-3 shadow border border-rounded border-white" onSubmit={(e)=>createUser}>
      <div className="form-group">
        <h3>{formMessage()}</h3>
      </div>
        <div class="form-group" >
          <label class="mt-4"  htmlFor="birthday">Birthday:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="birthday"
            placeholder="datetime.today"
            type="date"onChange={(e)=>setBirthday(e.target.value)}value={ birthday }/>
        </div>
        <div class="form-group" >
          <label class="mt-3"   htmlFor="userName">First Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control "
            name="userName"
            placeholder="First Name"
            type="text"onChange={(e)=>setuserName(e.target.value)}value={ userName }/>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="firstName">First Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="firstName"
            placeholder="First Name"
            type="text"onChange={(e)=>setfirstName(e.target.value)}value={ firstName }/>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="Last Name">Last Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            type="text"
            placeholder="lastName"
            name="lastName"onChange={(e)=>setlastName(e.target.value)}value={ lastName }/>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="email">Email</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="email"
            placeholder="email"
            type="email"onChange={(e)=>setemail(e.target.value)}value={ email }/>
       </div>
       <div class="form-group" >
          <label class="mt-3" htmlFor="password">Password:</label>
          <input class=" shadow border border-rounded border-primary form-control"
            name="password"
            placeholder="your password"
            type="password"onChange={(e)=>setpassword(e.target.value)}value={ password }/>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            class=" shadow border border-rounded border-primary form-control "
            name="confirmPassword"
            placeholder="your password"
            type="password"onChange={(e)=>setconfirmPassword(e.target.value)}value={ confirmPassword }/>
        </div>
        <div class="form-group" >
          <input class=" btn btn-secondary mt-3 mb-4 shadow border border-rounded border-primary form-control"
            type="submit" name="submit" value="Create User"/>
        </div>
      </form>

    <div>
        <h3>New User</h3>
        <table class="table table-striped border border-rounded border-dark">
            <thead class="thead thead-dark border border-rounded">
                <th scope="col">Birthday:</th>
                <th scope="col">User Name:</th>
                <th scope="col">First Name:</th>
                <th scope="col">Last Name</th>
                <th scope="col">Eamil:</th>
                <th scope="col">Password</th>
                <th scope="col">Password</th>
            </thead>
            <tbody>
                <td>{birthday}</td>
                <td>{userName}</td>
                <td> {firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{confirmPassword}</td>
            </tbody>
        </table >
    </div >
    </>
  )
  }


export default UserForm;
