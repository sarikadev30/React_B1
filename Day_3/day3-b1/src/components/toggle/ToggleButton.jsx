export default function ToggleButton({ mode, onToggle }) {
  return (
    <button
      style={{ backgroundColor:mode?"yellow":"blue", color: "black",width:"20%", height:"30px"}}
      onClick={onToggle}
    >
      {mode ? "Dark" : "Light"}
    </button>
  );
}
