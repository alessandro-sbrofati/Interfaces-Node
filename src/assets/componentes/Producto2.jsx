function Producto2({nombre, precio, cantidad}){
    function onMouseEnter() {
        
    }
    function onMouseLeave() {
        
    }
    return(
        <>
        <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{nombre}</p>
        </>
    );
}
export default Producto2