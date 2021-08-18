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
      <div class="container d-flex w-100 h-100 p-3 text-center mx-auto flex-column bg-dark navbar-dark">
        <header class="mb-auto">
          <div>
            <img className="float-md-start logo mb-0" src={logo} alt="Logo" />
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link active" aria-current="page" href="#about">Обо мне</a>
              <a className="nav-link active" href="#timeline">Резюме</a>
              <a className="nav-link active" href="#contacts">Контакты</a>
            </nav>
          </div>
        </header>
        </div>

    </StyledNavbar>
  )
}

export default Navbar;