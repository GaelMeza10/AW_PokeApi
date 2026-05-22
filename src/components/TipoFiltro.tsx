import { useEffect, useState } from "react";

interface TipoFiltroProps{
    value: string;
    OnTypeChange: (tipo: string) => void;
}

export const TipoFiltro = ({ value, OnTypeChange }: TipoFiltroProps) => {

    const [listaTipos, setListaTipos] = useState<string[]>([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type")
        .then((res) => res.json())
        .then((data)=>
        {
            setListaTipos(data.results.map((t:{name:string}) => t.name));
        })
        .catch((err) => console.error("Error obteniendo los tipos de Pokemon:", err));
    }, []);

    return(
        <div>
            <select
                value={value}
                onChange={(e) => OnTypeChange(e.target.value)}
                className="appearance-none w-full py-3 pl-5 pr-12 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300 cursor-pointer"
            >
                <option value="">Todos los tipos</option>
                {listaTipos.map((tipo) => (
                    <option key={tipo} value={tipo}>
                        {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </option>
                ))}
            </select>

        </div>
    )

}

