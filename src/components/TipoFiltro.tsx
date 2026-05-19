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
                className="border border-gray-300 rounded px-4 py-2"
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

