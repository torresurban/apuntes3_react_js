const App = () => {
    let auth = false
    return(
        <div>
            <h1>Sintaxix JSX</h1>
            <label htmlFor="nombre">Nombre</label>
            <input type='text'id="nombre"/>
            <hr />
            <p>{!auth ? 'El usuario esta logueado' : 'El usuario no esta logueado'}</p>
        </div>
    )
}

export default App;