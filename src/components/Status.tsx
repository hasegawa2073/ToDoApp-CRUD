type StatusType = "Not started" | "In progress" | "Done";

type StatusProps = {
  type: StatusType;
};

const Status = (status: StatusProps) => {
  return (
    <div className="text-center text-white">
      <p
        className={`rounded ${(() => {
          switch (status.type) {
            case "Not started":
              return "bg-gray-600";
            case "In progress":
              return "bg-indigo-600";
            case "Done":
              return "bg-green-600";
            default:
              return "bg-gray-600";
          }
        })()} px-7 py-2`}
      >
        {status.type}
      </p>
    </div>
  );
};

export default Status;
