import { useMemo } from "react";

export default function useSchedulingPriceCalculations(pokemonsAdded: string[]) {

    const validPokemonsAdded = useMemo(()=>pokemonsAdded.filter(pokemon=>pokemon!==""), [pokemonsAdded]);
    const numberOfValidPokemonsAdded = useMemo(()=>validPokemonsAdded.length, [validPokemonsAdded]);
    const subtotal = useMemo(()=>(70*numberOfValidPokemonsAdded).toFixed(2), [pokemonsAdded]);
    const managingFee = useMemo(()=>(Number(subtotal)*0.03).toFixed(2), [subtotal]);
    const total = useMemo(()=>(Number(subtotal)+Number(managingFee)).toFixed(2), [subtotal, managingFee]);

    return { validPokemonsAdded, numberOfValidPokemonsAdded, subtotal, managingFee, total };
}