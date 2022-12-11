import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateTaskButton = () => {
  return (
    <>
      <div className="inline-block cursor-pointer rounded-md bg-yellow-400 px-5 py-4 text-xl font-bold text-white transition-colors hover:bg-yellow-300">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPlus} className="text-2xl" />
          <span className="pl-3">Create a new task</span>
        </div>
      </div>
    </>
  );
};

export default CreateTaskButton;
