import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../pages/auth/AuthProvider";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="border-b border-solid border-gray-500 pb-5">
      <div className="flex items-center justify-between">
        <h1 className="inline-block text-4xl font-bold text-gray-800">
          {props.title == undefined ? "My tasks" : props.title}
        </h1>
        {currentUser === undefined ? (
          ""
        ) : (
          <button
            className="inline-block text-base font-bold text-gray-800"
            onClick={() => signOut(auth)}
          >
            <p className="inline-block pr-1">ログアウト</p>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
