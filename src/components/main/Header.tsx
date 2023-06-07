import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-center mb-10">
      <img src={logo} alt="password logo" className="w-16 h-16" />
      <h3 className="text-left text-lg font-semibold">Password manager</h3>
    </header>
  );
};

export default Header;
