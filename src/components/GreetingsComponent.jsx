import Alert from "react-bootstrap/Alert";

function Greetings() {
  return (
    <Alert variant="warning" className="m-2 text-center">
      <Alert.Heading>
        Hello there, do you want to study history?
      </Alert.Heading>
      <p>
        We have a great assort of books to choose from
      </p>
      <hr />
      <p>Scoll down and see by yourself!</p>
    </Alert>
  );
}

export default Greetings;