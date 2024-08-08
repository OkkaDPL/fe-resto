import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  function submitForm(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body ">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form className="box" onSubmit={submitForm}>
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="*****"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Re-Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="*****"
                      />
                    </div>
                    <div className="field">
                      <button
                        type="submit"
                        className="button is-success is-fullwidth mt-3"
                      >
                        Regiser
                      </button>
                      <Link
                        to="/login"
                        className="button is-info is-fullwidth mt-3"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
