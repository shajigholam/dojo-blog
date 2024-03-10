// this is a custom hook: externalizing a logic into its own file. for example, to fetch data we need to write the same logic(useEffect) into different components, instead we can make a separate js file and import that..
//custom hook needs to start with use
import { useEffect, useState } from "react";
//passing the endpoint
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //useEffect cleanup: abrt uses for when the user switch to another page before fetching data is done so to avoid that error
        const abortCont = new AbortController();

        //to simulate that fetching data takes a little bit of time, put it in setTimeout
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else{
                        // console.log(err.message);
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;