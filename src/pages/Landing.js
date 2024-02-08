import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              voluptatem nemo cupiditate, laudantium iusto atque eaque cumque
              dignissimos velit. Voluptatem?
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='people' className='img main-img' />
        </div>
      </main>
    </Wrapper>
  );
};
export default Landing;
