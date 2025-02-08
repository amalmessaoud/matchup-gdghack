import "../Styles/logIn.css";

const LogIn = () => {
  return (
    <div class="all_the_page">
      <div class="t1">
        <h1 id="Title1">WELCOME BACK!</h1>
        <h2 id="title2">Match Up! </h2>
      </div>

      <div class="container">
        <form class="information">
          <div class="user-info">
            <label htmlFor="email" requierd />
            Email address
            <br />
            <input id="email" value="enter your email" />
            <br />
            <br />
            <label for="password" id="password" />
            Password
            <br />
            <input name="password" id="password" value="name" type="text" />
            <br />
            <br />
            <br/>
            <br/>
            <br/>
          </div>

          <div class="for_login">
            <button id="b">Log in</button>
            <br />
            <br />
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="divider">
             <label className="line"></label>
             <label className="or-text">Or</label>
               <label className="line"></label>
            </div>
            <br />

            <h4> Don't have an acount </h4>

            <a href="jk" target="blank" >
              Sign Up
            </a>
          </div>
        </form>

          <img src="../../../public/assets/im.gdg.png" />
      </div>
    </div>
  );
};

export default LogIn;