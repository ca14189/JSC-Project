
const Loader = () => {
  return (
    <svg
      className="animate-spin h-5 w-5 mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25 stroke-white"
        cx="12"
        cy="12"
        r="10"
        strokeWidth="4"
      ></circle>

      
      <path
        className="opacity-75 fill-white"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
      ></path>
    </svg>
  );
};

export default Loader;
