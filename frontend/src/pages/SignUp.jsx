import "../Styles/SignUP.css"

const SignUp = () => {
    return (
      <div>
        <div class="all_the_page">
      <div class="t1">
        <h1 id="Title1">Welcome to our community</h1>
        <h2 id="title2">Match Up! </h2>
      </div>

      <div class="container">
        <form class="information">
          <div class="user-info">
            <label htmlFor="Full name" requierd />
            Full name
            <br />
            <input id="full_n" value="enter your name" />
            <br />
            <br />
            <label for="email adress"  />
            Email address
            <br />
            <input name="email_address" id="email_address" value="enter your email"  />
            <br />
            <br />
            <label for="Password"  /> Password
            <br />
            <input name="password" id="password" value="enter your password"  />
            <br/>
            <br/>
            <div className="form-container">
  {/* School Year */}
  <div className="dropdown-container">
    <label className="dropdown-title">School year</label>
    <div className="dropdown">
      <input type="checkbox" id="school-year-toggle" className="dropdown-checkbox"/>
      <label htmlFor="school-year-toggle" className="dropdown-btn">
        Select your option 
        <span className="dropdown-arrow"></span>
      </label>
      <div className="dropdown-content">
        <label><input type="radio" name="school-year" /> 1CP</label>
        <label><input type="radio" name="school-year" /> 2CP</label>
        <label><input type="radio" name="school-year" /> 1CS</label>
        <label><input type="radio" name="school-year" /> 2CS</label>
        <label><input type="radio" name="school-year" /> 3CS</label>
      </div>
    </div>
  </div>
  <br/>
  <br/>


  {/* Interests */}
  <div className="dropdown-container">
    <label className="dropdown-title">Interests</label>
    <div className="dropdown">
      <input type="checkbox" id="interests-toggle" className="dropdown-checkbox"/>
      <label htmlFor="interests-toggle" className="dropdown-btn">
        Select your interests 
        <span className="dropdown-arrow"></span>
      </label>
      <div className="dropdown-content">
        <label><input type="checkbox" /> Front-End</label>
        <label><input type="checkbox" /> Back-End</label>
        <label><input type="checkbox" /> DevOps</label>
        <label><input type="checkbox" /> Cyber Security</label>
        <label><input type="checkbox" /> AI</label>
        <label><input type="checkbox" /> Mobile</label>
      </div>
    </div>
  </div>
</div>
          <br/>
          <br/>
            <div class="skills-container">
             <label class="skills-title">Skills</label>
             <div class="dropdown">
               <input type="checkbox" id="skills-toggle" class="dropdown-checkbox"/>
                <label htmlFor="skills-toggle" class="dropdown-btn"><p id="skills-toggle">
                 Select your skills </p>
                  <span class="dropdown-arrow"></span>
                </label>
                <div class="dropdown-content">
                 <label><input type="checkbox" /> Front-End</label>
                 <label><input type="checkbox" /> Back-End</label>
                 <label><input type="checkbox" /> DevOps</label>
                  <label><input type="checkbox" /> Cyber Security</label>
                   <label><input type="checkbox" /> AI</label>
                   <label><input type="checkbox" /> Mobile</label>
                  </div>
                 </div>
                </div>
                <br/>
                <br/>


            
            
              </div>

         

            
          
       </form>

          <img src="../../../public/assets/im.gdg.png" />
      </div>
      </div>
    </div>
    );
  };
  
  export default SignUp;