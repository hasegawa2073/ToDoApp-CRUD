import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useContext } from "react";
import CreateTaskButton from "../components/CreateTaskButton";
import Layout from "../components/Layout";
import Status from "../components/Status";
import { db } from "../firebase";
import { AuthContext } from "./auth/AuthProvider";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser?.displayName);
  console.log(currentUser?.uid);

  // const tasksArray: DocumentData[] = [];
  // const getTasks = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "tasks"));
  //     querySnapshot.forEach((doc) => {
  //       tasksArray.push(doc.data());
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // getTasks().then(() => {
  //   console.log(tasksArray);
  // });

  return (
    <>
      <Layout title={`${currentUser?.displayName}'s tasks`}>
        <CreateTaskButton />
        <div className="mt-8 mb-4 grid grid-cols-12 gap-2 rounded bg-gray-50 py-5 px-10 text-xl font-bold text-gray-700">
          <h2 className="col-start-1 col-end-8 justify-self-start">
            Task name
          </h2>
          <h2 className="col-start-8 col-end-10 justify-self-center">Action</h2>
          <h2 className="col-start-11 col-end-13 justify-self-center">
            Status
          </h2>
        </div>
        <div className="mb-3 grid grid-cols-12 items-center gap-2 rounded bg-gray-50 py-5 px-10 text-base font-bold text-gray-600">
          <p className="col-start-1 col-end-8 inline-block w-full justify-self-start px-1 py-2 font-normal text-gray-700">
            資料をつくる
          </p>
          <div className="col-start-8 col-end-10 inline-block justify-self-center text-2xl transition-colors">
            <div className="mx-3 inline-block cursor-pointer hover:text-indigo-700">
              <FontAwesomeIcon icon={faPen} />
            </div>
            <div className="mx-3 inline-block cursor-pointer hover:text-indigo-700">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <div className="col-start-11 col-end-13 inline-block justify-self-center">
            <Status type="Not started" />
          </div>
        </div>
      </Layout>
    </>
  );
}
