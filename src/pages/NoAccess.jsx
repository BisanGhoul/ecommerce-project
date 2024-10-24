import logo from '../../src/assets/images/login2.jpg';
import Header from './../components/header/Header';

export default function NoAccess() {
  return (
    <div>
        <Header />Header
      <img src={logo} width={600} height={600} alt="Logo" />
    </div>
  );
}
