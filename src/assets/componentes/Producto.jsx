function Producto ({nombre, precio, disponible}){
    if(disponible){
        return(
            <>
            <h2 style = {{ color: "green"}}>En Stock</h2>
            <p style = {{ color: "green"}}>{nombre} {precio}€</p>
            </>
        );
    }else{
         return(
            <>
            <h2 style = {{ color: "red"}}>Agotado</h2>
            <p style = {{ color: "red"}}>{nombre} {precio}€</p>
            </>
        );
    }
}
export default Producto