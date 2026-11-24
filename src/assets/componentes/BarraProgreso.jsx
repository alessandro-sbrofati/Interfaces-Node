function BarraProgreso({ porcentaje }) {
  return (
    <div className="border-solid border-2">
      <div style={{ backgroundColor: "red", width: `${porcentaje}%` }}>
        <p style = {{color: "black"}}>{porcentaje}/100</p>
      </div>
    </div>
  );
}
 
export default BarraProgreso;