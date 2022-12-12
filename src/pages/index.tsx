import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateTaskButton from "../components/CreateTaskButton";
import Status from "../components/Status";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <div className="mx-auto max-w-5xl py-8 px-4">
          <header>
            <h1 className="border-b border-solid border-gray-500 pb-5 text-5xl font-bold text-gray-800">
              My tasks
            </h1>
          </header>
          <main className="py-10">
            <CreateTaskButton />
            <div className="mt-8 mb-4 grid grid-cols-12 gap-2 rounded bg-gray-50 py-5 px-10 text-xl font-bold text-gray-700">
              <h2 className="col-start-1 col-end-8 justify-self-start">
                Task name
              </h2>
              <h2 className="col-start-8 col-end-10 justify-self-center">
                Action
              </h2>
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
          </main>
        </div>
      </div>
    </>
  );
}
