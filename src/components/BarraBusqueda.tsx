interface BarraBusquedaProps {
    value: string;
    onSearch: (texto: string) => void;
}


export const BarraBusqueda = ({ value, onSearch }: BarraBusquedaProps) => {
    return(
        <div className="w-md py-3 pl-5 pr-12 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300 ">
            <input 
                type="text" 
                placeholder="Buscar pokemon" 
                value={value}

                onChange={(e) => onSearch(e.target.value)}
                className="w-full focus:outline-none"
            />
        </div>
    )
}