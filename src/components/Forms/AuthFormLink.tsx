import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface AuthFormLinkProps {
    text: string;
    onClick?: () => void;
  }
  
  const AuthFormLink = ({ text, onClick }: AuthFormLinkProps) => {
    return (
      <div className="mt-5 text-sm items-center  flex justify-between">
        <div className="space-x-2">
        <span className="text-gray-600">{text}</span>
        {onClick && (
          <button
            type="button"
            className="font-medium text-primary hover:text-blue-500"
            onClick={onClick}
          >
            {` `}
            Click here
          </button>
        )}
        </div>
        <Link to="/"><HomeIcon className='h-6 text-primary' /></Link>
      </div>
    );
  };
  
  export default AuthFormLink;
  