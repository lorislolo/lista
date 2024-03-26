function MinhaLista({ itens }) {
    return (
        <>
            <h3>Lista de Comida Ruim:</h3>
            {
                itens.map((item) => (
                    <p>{item}</p>
                ))}
        </>
    );
}

export default MinhaLista