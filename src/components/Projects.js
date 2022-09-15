import React from 'react';

const Projects = () => {
  return (
    <div id="Projects">
      <div class="projects">
        <h1 class="py-5">Latest Projects</h1>
            <div class="container">
              <div class="row">
      
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src="../7.png" class="card-img-top" alt="7" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Portfolio Website</h5>
                      <p class="card-text mb-4">A React based website designed and built from the ground up.</p>
                      <a href="#About" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src="../CS50.png" class="card-img-top" alt="CS50" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Harvard CS50</h5>
                      <p class="card-text mb-4">Completed Harvard's Intro to Computer Science course where I gained knowledge in C, Python, Flask, SQL, HTML, CSS, JavaScript, Data Structures and Algorithms.</p>
                      <a target="blank" rel="noopener noreferrer" href="https://certificates.cs50.io/2cebf8aa-f43d-4b57-a386-9e1f042aebea.pdf?size=letter" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src="../Lilly.png" class="card-img-top" alt="Lilly" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Eli Lilly Augmented Reality</h5>
                      <p class="card-text mb-4">Built an application by leveraging Microsoft PowerApps and Power Automate for Eli Lilly's RealWear HMT-1 and Microsoft HoloLens 2.</p>
                      <a target="blank" rel="noopener noreferrer" href="https://polytechnic.purdue.edu/capstone-project/91-eli-lilly-and-company" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Projects