import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase";
import SignIn from "../signin";

type User = {
  displayName: string | null;
  uid: string | null;
};
type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};
type Props = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});

const AuthProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );
  const [signInCheck, setSignInCheck] = useState(false);

  // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        setSignInCheck(false);
      }
    });
  }, []);

  if (signInCheck) {
    return (
      <AuthContext.Provider value={{ currentUser, signInCheck }}>
        {children}
      </AuthContext.Provider>
    );
  } else {
    return <SignIn />;
  }
};

export { AuthProvider, AuthContext };
