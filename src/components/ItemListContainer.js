const ItemListContainer = () => {
    const categorias = () => {
        alert('En proceso');
    };
    return (
        <div>
            <h2>Catálogo</h2>
            <button onClick={categorias}>Ver productos</button>
        </div>
    )
};

export default ItemListContainer;