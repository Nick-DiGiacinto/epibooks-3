import Alert from "react-bootstrap/Alert";

function Mywelcome() {
  return (
    <Alert variant="success" className="m-2 text-center">
      <Alert.Heading>
        Hello there, do you want to study history?
      </Alert.Heading>
      <p>
        We have a great assort of books to choose from
      </p>
      <hr />
      <p>Scoll down....</p>
    </Alert>
  );
}

export default Mywelcome;