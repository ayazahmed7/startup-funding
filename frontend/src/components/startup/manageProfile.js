import React from 'react'

const Manageprofile = () => {
  return (
    <div> <section
    className="vh-100 bg-image"
    style={{
      backgroundImage:
        'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
    }}
  >
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h3 className="text-center mb-5">
                  Manage Profile
                </h3>

                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Full Name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example3cg">
                      Email
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example4cg">
                      Password
                    </label>
                  </div>
                  
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Startup Name
                    </label>
                    </div>
                    <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Type of startup
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" >
                      Funds Expecting
                    </label>
                  </div>
                   <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Submit
                    </button>
                  </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </div>
  )
}

export default Manageprofile