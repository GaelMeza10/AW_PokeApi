interface BarraBusquedaProps {
    value: string;
    onSearch: (texto: string) => void;
}


export const BarraBusqueda = ({ value, onSearch }: BarraBusquedaProps) => {
    return(
        <div className="flex justify-center mb-8 mt-5 ">
            <input 
                type="text" 
                placeholder="Ingresa el nombre del pokemon" 
                value={value}

                onChange={(e) => onSearch(e.target.value)}
                className="border border-black rounded-md px-4 w-100"
            />
        </div>
    )
}