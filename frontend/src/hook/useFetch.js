import { useEffect, useState } from "react";
import getTest from "../services/getTest";

function useFetch(){
    const [data , setData] = useState(null);
    const [error , setError] = useState("");

    useEffect(()=>{

        async function fetchData() {
            setData(null);
            setError("");

            try{
                const data = await getTest();

                setData(data);
            }catch(error){
                setError(error);
            }
        }

        fetchData();
    },[]);

    return [data , error];
}

export default useFetch;