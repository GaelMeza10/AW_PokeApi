//local storage para pokemones favoritos
export const getFavoritos = () => {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
}

export const agregarFavorito = (pokemonId: number) => {
    const favoritos = getFavoritos();
    if (!favoritos.includes(pokemonId)) {
        favoritos.push(pokemonId);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
}

export const eliminarFavorito = (pokemonId: number) => {
    let favoritos = getFavoritos();
    favoritos = favoritos.filter((id: number) => id !== pokemonId);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}