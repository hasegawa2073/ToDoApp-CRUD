import Layout from "../components/Layout";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        //
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Layout title="ログイン">
        <button
          onClick={signInWithGoogle}
          className="rounded-md bg-green-600 py-4 px-5 text-xl text-white"
        >
          Googleでログイン
          <FontAwesomeIcon icon={faRightToBracket} className="pl-2" />
        </button>
      </Layout>
    </>
  );
};

export default SignIn;
