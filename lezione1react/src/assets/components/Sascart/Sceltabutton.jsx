import"./Sascart.css";

function sceltaButton({ scelta, onClick }) {
  return (
    <div className="btn">
    <button onClick={() => onClick(scelta)}>
    {scelta}
    </button>
    </div>
  );
}

export default sceltaButton;
