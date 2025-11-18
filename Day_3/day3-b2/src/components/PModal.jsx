import ReactDOM from "react-dom";
export default function PModal({ children }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        width: "50%",
        height: "50%",
        backgroundColor: "green",
        color: "red",
      }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}
