import { uuidv4 } from "@firebase/util";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useCallback, useContext, useState } from "react";
import Layout from "../components/Layout";
import { statusArray } from "../components/Status";
import { db } from "../firebase";
import { AuthContext } from "./auth/AuthProvider";

const Add = () => {
  const { currentUser } = useContext(AuthContext);
  const [status, setStatus] = useState(statusArray[0] as string);
  const [taskName, setTaskName] = useState("");
  const taskInput = useCallback((inputElement: HTMLInputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  const addTask = async () => {
    await setDoc(doc(db, "tasks", uuidv4()), {
      id: uuidv4(),
      name: taskName,
      status: status,
      uid: currentUser?.uid,
    });
  };

  return (
    <>
      <Layout title="Add task">
        <Link href="/" className="text-lg font-bold text-gray-800">
          <span className="pr-2">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back to Home
        </Link>
        <div className="mt-5 mb-4 grid grid-cols-12 gap-2 rounded bg-gray-50 py-5 px-10 text-xl font-bold text-gray-700">
          <h2 className="col-start-1 col-end-11 justify-self-start">
            Task name
          </h2>
          <h2 className="col-start-11 col-end-13 justify-self-center">
            Status
          </h2>
        </div>
        <form className="text-center">
          <div className="grid grid-cols-12 gap-2 rounded bg-gray-50 py-5 px-10 text-gray-700">
            <input
              type="text"
              className="col-start-1 col-end-11 w-full justify-self-start rounded bg-gray-50 py-1 px-2 text-base font-normal"
              placeholder="タスクを入力してください。"
              ref={taskInput}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <select
              className={`col-start-11 col-end-13 justify-self-center rounded px-4 py-2 text-center font-bold text-white ${(() => {
                switch (status) {
                  case "Not started":
                    return "bg-gray-600";
                  case "In progress":
                    return "bg-blue-600";
                  case "Done":
                    return "bg-green-600";
                  default:
                    return "bg-gray-600";
                }
              })()}`}
              onChange={(e) => setStatus(e.target.value)}
            >
              {statusArray.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <Link
              className="col-start-5 col-end-9 mt-8 rounded-md bg-indigo-700 py-3 px-10 text-center text-xl font-bold text-white transition-colors hover:bg-indigo-800"
              onClick={addTask}
              href="/"
            >
              <div>
                <span className="pr-2">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                add task
              </div>
            </Link>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Add;
