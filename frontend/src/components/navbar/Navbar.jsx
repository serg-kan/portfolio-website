import styled from 'styled-components';
import logo from './images/logo_full.png';

const StyledNavbar = styled.div`
  width: 100%;

  .logo {
    max-height: 48px;
  }
  .nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }

  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
  }

  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }

  .nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
  }
`;

function Navbar(props) {
  return (
    <StyledNavbar className="bg-dark">
      <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column bg-dark navbar-dark">
        <header class="mb-auto">
          <div>
            <img className="logo" src={logo} alt="Logo" />
            <nav class="nav nav-masthead justify-content-center float-md-end">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>
        </div>

    </StyledNavbar>
    
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   {/* <div className="container-fluid"> */}
    //     <a className="navbar-brand" href="#">Sergey Kan</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Обо мне</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Резюме</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Контакты</a>
    //         </li>
    //       </ul>
    //     </div>
    //   {/* </div> */}
    // </nav>
  )
}

export default Navbar;