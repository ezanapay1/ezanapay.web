interface AuthFormLinkProps {
    text: string;
    onClick?: () => void;
  }
  
  const AuthFormLink = ({ text, onClick }: AuthFormLinkProps) => {
    return (
      <div className="mt-2 text-sm space-x-2">
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
    );
  };
  
  export default AuthFormLink;
  