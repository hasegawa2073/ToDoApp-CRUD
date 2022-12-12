type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <header>
      <h1 className="border-b border-solid border-gray-500 pb-5 text-5xl font-bold text-gray-800">
        {props.title}
      </h1>
    </header>
  );
};

export default Header;
