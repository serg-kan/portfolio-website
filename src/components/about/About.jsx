import styled from 'styled-components';

const StyledAbout = styled.div`
  width: 100%;
  /* min-height: 400px;
  height: 80vh; */
  background-color: #333;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  .title {
    font-size: 5em;
    font-weight: 700;
  }

  .avatar {
    height: 300px;
    width: 300px;

    min-height: 200px;
    min-width: 200px;

    max-height: 400px;
    max-width: 400px;
  }
`;

const About = (props) => {
  return(
    <StyledAbout className="bg-ad">
      <div className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold">Сергей Кан</h1>
            <p className="lead fw-light">Разработчик в прошлом, аналитик в настоящем, продакт в будущем</p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;