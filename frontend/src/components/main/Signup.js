import React from 'react';
import {useFormik} from 'formik';
import app_config from '../../config';
import Swal from 'sweetalert2';

const Signup = () => {

  const url = app_config.apiurl;


  const addStartup = async (id) => {
    const response = await fetch(url+'/startup/add', {
      method: 'POST',
      body : JSON.stringify({owner : id}),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    // reading response status
    console.log(response.status);

    
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      created_at: new Date()
    },
    onSubmit: async (values, {setSubmitting, resetForm}) => {
      const response = await fetch(url+'/user/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      // reading response status
      console.log(response.status);

      if(response.status === 201){
        const data = (await response.json()).result;
        addStartup(data._id);
        Swal.fire({
          icon : 'success',
          title : 'Registered',
          text : 'User registered successfully'
        })

      }

      setSubmitting(false)
      resetForm()
    },
  });

  return (
    <div><>
    {/* Section: Design Block */}
    <section className="text-center text-lg-start">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
        }}
      />
      {/* Jumbotron */}
      <div className="container py-4">
        <div className="row g-0">
        <div className="col-lg-8 mb-5 mb-lg-0">
          <div className='login-card-img w-100'>

          </div>
            {/* <img
              src=""
              className="w-100 rounded-4 shadow-4"
              alt=""
            /> */}
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)"
              }}
            >
              <div className="card-body p-5 shadow-5">
                <h2 className="fw-bold mb-5 text-center">Sign up now</h2>
                <form onSubmit={formik.handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label" htmlFor="form3Example1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                        
                    </div>
                    
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example33"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="form2Example33">
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
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* Jumbotron */}
    </section>
    {/* Section: Design Block */}
  </>
  </div>
  )
}

export default Signup