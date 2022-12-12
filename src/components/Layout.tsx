import { FC, ReactNode } from "react";
import Header from "./Header";

type Props = {
  title: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <div className="mx-auto max-w-5xl py-8 px-4">
          <Header title={title} />
          <main className="py-10">{children}</main>
        </div>
      </div>
      ;
    </>
  );
};

export default Layout;
