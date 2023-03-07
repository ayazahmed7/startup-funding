import React from 'react'

const Signin = () => {
  return (
    <div><>
    {/* Section: Design Block */}
    <section className="">
      {/* Jumbotron */}
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
              <h4>Raise funding. Invest in startups. 
              Secure & Transparent Technology platform </h4>
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5"> 
                  <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                          
                          />
                          
                          <h3 className="mb-5">Sign in</h3>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="typeEmailX-2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="typeEmailX-2">
                              Email
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="typePasswordX-2"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="typePasswordX-2"
                            >
                              Password
                            </label>
                          </div>
                          {/* Checkbox */}
                          <div className="form-check d-flex justify-content-start mb-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="form1Example3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form1Example3"
                            >
                              {" "}
                              Remember password{" "}
                            </label>
                          </div>
                          <button
                            className="btn btn-primary btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                          <hr className="my-4" />
                          <button
                            className="btn btn-lg btn-block btn-primary"
                            style={{ backgroundColor: "#dd4b39" }}
                            type="submit"
                          >
                            <i className="fab fa-google me-2" /> Sign in with
                            google
                          </button>
                          <button
                            className="btn btn-lg btn-block btn-primary mb-2"
                            style={{ backgroundColor: "#3b5998" }}
                            type="submit"
                          >
                            <i className="fab fa-facebook-f me-2" />
                            Sign in with facebook
                          </button>
                          {/* Checkbox */}
                          <div className="form-check d-flex justify-content-center mb-4">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue=""
                              id="form2Example33"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example33"
                            >
                              Subscribe to our newsletter
                            </label>
                          </div>
                          {/* Submit button */}
                          <button
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                          >
                            Sign up
                          </button>
                          {/* Register buttons */}
                          <div className="text-center">
                            <p>or sign up with:</p>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-facebook-f" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-google" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-twitter" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-github" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Jumbotron */}
          </div>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </>
  
  </div>
  )
}

export default Signin