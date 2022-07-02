const Titulo = (props) => {
    console.log(props);
    return (
    // lAS FUNCIONES EN jS SOLAMENTE PUEDEN DEVOLVER UN OBJETO, POR ESO EL DIV.  
    // Lo que está abajo se llama fragment, y no crea ningún nodo.
    <> 
        {/*  Se usan las llaves para escapar de jsx y pedir variables.*/}
        <h2> {props.titulo} </h2> 
        <h5> Subtitulo de la App</h5>
    </>
    
    
    );
}

export default Titulo;

