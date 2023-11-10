import React from 'react'


const Main = () => {
  return (
    <>
    <div className="jumbotron" style={{ backgroundColor: 'rgb(41, 39, 39)', color: 'white', textAlign: 'center', marginTop: '90px' }}>
      <h1 className="display-4" id='home'>Ciao, sono <span className="name">Elisa Fambrini.</span></h1>
      <p className="lead">Sono una junior full-stack Web Developer</p>
      <hr className="my-4" />
  
      <p className="lead">
        <a className="btn btn-primary"
  style={{
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
  }}href="#projects" role="button">Tutti i miei progetti</a>
      </p>
    </div>
  </>
  )  
}
    
export default Main