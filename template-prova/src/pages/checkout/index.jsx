import "./checkout.css";
import { useNavigate } from "react-router";

export function Checkout() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }

  return (
    <div id="checkout">
      <button onClick={() => handleNavigate()}>Home</button>
      <h1>Teste</h1>
    </div>
  );
}
