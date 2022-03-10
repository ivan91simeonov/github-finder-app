import './About.css'
function About() {
  return (
    <>
      <h1 >Github Finder</h1>
      <p className='git'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p>
        Version <span className="text-white">1.0.0</span>
      </p>
      <p>
        Layout By:
        <a href="https://twitter.com/hassibmoddasser"> Hassib Moddasser</a>
      </p>
    </>
  );
}

export default About;
