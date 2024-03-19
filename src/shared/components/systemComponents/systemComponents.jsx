import Button from "react-bootstrap/Button";

export const CancelButton = ({ onClick, children }) => {
  return (
    <Button
      className="Cancel-button btn btn-primary Cancel-button-smallModal ms-2"
      type="button"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const SubmitButton = ({ onClick, children }) => {
  return (
    <Button
      className="Create-Account-button btn btn-primary update-button update-button-smallModal"
      type="submit"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
