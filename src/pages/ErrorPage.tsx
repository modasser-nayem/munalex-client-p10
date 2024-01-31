import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
         <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
               404 - Page Not Found
            </h2>
            <p className="text-lg text-gray-700 mb-6">
               Sorry, the page you are looking for could not be found.
            </p>
            <Link
               to="/"
               className="text-blue-500 hover:underline"
            >
               Go back to home page
            </Link>
         </div>
      </div>
   );
};

export default ErrorPage;
