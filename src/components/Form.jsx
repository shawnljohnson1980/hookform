import React, { useState } from "react";

const UserForm = (props) => {
  const [userName,setUserName]=useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [passwordError,setPasswordError]=useState("");
  const [confimPasswordError,setConfirmPasswordError]=useState("");

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
return "Welcome, please register";
}
}
const handleFirstName = (e) => {
  setFirstName(e.target.value);
  if(e.target.value.length < 2 | e.target.value.length ==0) {{}
    setFirstNameError("First name is required!");
  } else if(e.target.value.length < 3) {
    setFirstNameError("First Name must be 3 characters or longer!");
  
const handleLastName = (e) => {
  setLastName(e.target.value);
  if(e.target.value.length < 2 | e.target.value.length ==0) {
  setLastNameError("First name is required!");
  } else if(e.target.value.length > 45) {
  setLastNameError("Last Name cannot be longet than 45 Characters");

const handleUserName = (e) => {
    setUserName(e.target.value);
    if(e.target.value.length < 2 | e.target.value.length ==0) {
    setUserNameError("First name is required!");
    } else if(e.target.value.length > 45) {
    setUserNameError("Last Name cannot be longet than 45 Characters");
          
const handleBirthday = (e) => {
  setBirthday(e.target.value);
  if(e.target.value.length <= 0 ) {
  setBirthdayError("A date must be selected.");
      
const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 2 | e.target.value.length ==0) {
    setEmailError("First name is to short!");
    } else if(e.target.value.length > 45) {
    setEmailError("Last Name cannot be longet than 45 Characters")

const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 2 | e.target.value.length ==0) {
    setPasswordError("First name is required!");
    } else if(e.target.value.length > 45) {
    setPasswordError("Last Name cannot be longet than 45 Characters")

const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if(e.target.value.length < 2 | e.target.value.length ==0) {
    setConfirmPasswordError(" Confirm Password must belonger than 2 characters");
    } else if(e.target.value.length > 45) {
    setConfirmPasswordError("Confirm Password cannot be longer than 45 characters ")
    }else if (confirmPassword != password){
      setConfirmPasswordError("Passwords Must Match.")
  return (
    <>
    <h4>{formMessage}</h4>
      <form class="mt-5 p-3 shadow border border-rounded border-white" onSubmit={(e)=>{createUser}}>
      <div className="form-group">
      </div>
        <div class="form-group" >
          <label class="mt-4"  htmlFor="birthday">Birthday:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="birthday"
            placeholder="datetime.today"
            type="date"onChange ={handleBirthday}/>
            <p class="text-danger">{birthdayError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3"   htmlFor="userName">First Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control "
            name="userName"
            placeholder="First Name"
            type="text"onChange={handleUserName}/>
            <p class="text-danger">{userNameError}</p>
            
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="firstName">First Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="firstName"
            placeholder="First Name"
            type="text"onChange={ handleFirstName }/>
             <p class="text-danger">{firstNameError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="Last Name">Last Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            type="text"
            placeholder="lastName"
            name="lastName"onChange={handleLastName}/>
            <p class="text-danger">{lastNameError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="email">Email</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="email"
            placeholder="email"
            type="email"onChange={handleEmail}/>
            <p class="text-danger">{emailError}</p>
       </div>
       <div class="form-group" >
          <label class="mt-3" htmlFor="password">Password:</label>
          <input class=" shadow border border-rounded border-primary form-control"
            name="password"
            placeholder="your password"
            type="password"onChange={ handlePassword }/>
            <p class="text-danger">{passwordError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            class=" shadow border border-rounded border-primary form-control "
            name="confirmPassword"
            placeholder="your password"
            type="password"onChange={handleConfirmPassword}/>
            <p class="text-danger">{confimPasswordError}</p>
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
        </table>
    </div>
    </>
   );
  };
 };
};

export default UserForm;
