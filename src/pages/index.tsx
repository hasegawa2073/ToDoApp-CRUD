import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CreateTaskButton from "../components/CreateTaskButton";
import Layout from "../components/Layout";
import Status from "../components/Status";
import { db } from "../firebase";
import { AuthContext } from "./auth/AuthProvider";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  const [allTaskData, setAllTaskData] = useState<DocumentData>([]);
  const tasksArray: DocumentData[] = [];
  const router = useRouter();

  const getTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      querySnapshot.forEach((doc) => {
        tasksArray.push([doc.data(), { docId: doc.id }]);
      });
      setAllTaskData(tasksArray);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const updateTask = async (id: string) => {
    deleteTask(id);
    getTasks();
  };

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {allTaskData.map((task: DocumentData) =>
          task[0].uid === currentUser?.uid ? (
            <div
              key={task.id}
              id={task[1].docId}
              className="mb-3 grid grid-cols-12 items-center gap-2 rounded bg-gray-50 py-5 px-10 text-base font-bold text-gray-600"
            >
              <p className="col-start-1 col-end-8 inline-block w-full justify-self-start px-1 py-2 font-normal text-gray-700">
                {task[0].name}
              </p>
              <div className="col-start-8 col-end-10 inline-block justify-self-center text-2xl transition-colors">
                <button
                  className="mx-3 inline-block hover:text-indigo-700"
                  onClick={() =>
                    router.push({
                      pathname: "/edit",
                      query: {
                        name: task[0].name,
                        status: task[0].status,
                        id: task[1].docId,
                      },
                    })
                  }
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button
                  className="mx-3 inline-block hover:text-indigo-700"
                  onClick={() => updateTask(task[1].docId)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div className="col-start-11 col-end-13 inline-block justify-self-center">
                <Status type={task[0].status} />
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </Layout>
    </>
  );
}
