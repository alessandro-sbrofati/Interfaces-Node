function AlertBox({tipo, mostrarIcono=false}){
    if(tipo==="info"){
        if(mostrarIcono==true){
            return(
                    <>
                    <p style={{backgroundColor:"blue"}}>{tipo}ℹ️</p>
                    </>
                );
        } else{
             return(
                    <>
                    <P style={{backgroundColor:"blue"}}>{tipo}</P>
                    </>
                );
        }
    } else if(tipo==="error"){
        if(mostrarIcono==true){
            return(
                    <>
                    <p style={{backgroundColor:"red"}}>{tipo}❌</p>
                    </>
                );
        } else{
             return(
                    <>
                    <p style={{backgroundColor:"red"}}>{tipo}</p>
                    </>
                );
        }
    } else if(tipo==="exito"){
        if(mostrarIcono==true){
            return(
                    <>
                    <p style={{backgroundColor:"green"}}>{tipo}✅</p>
                    </>
                );
        } else{
             return(
                    <>
                    <p style={{backgroundColor:"green"}}>{tipo}</p>
                    </>
                );
        }
    }
   
}
 
export default AlertBox;