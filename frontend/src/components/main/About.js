import React from 'react'

const About = () => {
  return (
    <div>
      <div className='col-md-8 mx-auto'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
             <img className='card-img-top' />    
               <div className='card-body'>
                <h1>Hanzala Zubair</h1>

                <button className='btn btn-dark mt-4'>Contact</button>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card'>
              <img className='card-img-top' />
              <div className='card-body'>
                <h1>Ayaz Ahmed</h1>

                <button className='btn btn-dark mt-4'>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About