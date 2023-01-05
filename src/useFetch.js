import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);  // initial value: null
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    // the function that's going to run every time there is a re-render 
    useEffect(() => {
        const abortCont = new AbortController();  // we can associate it with a fetch request, stop the fetch

        // don't use setTimeout in real app ! this is just a simulation of real situation
        setTimeout(() => {  // the following is gonna fire after x ms
            fetch(url, { signal: abortCont.signal })  // fetch data ; associate with abort controller
                .then(res => {  // get the res(respond)(data)
                    // console.log(res);
                    if (!res.ok) {  // ok: a property which means the fetch was ok, we've got data back
                        throw Error('Could not fetch the data for that resource');  // throw a error on inspect\console
                    }
                    return res.json();  // pass a json into a js object
                })
                .then(data => {  // print the data
                    setData(data);
                    setIsPending(false);  // once we show the data, delete 'loading...'
                    setError(null);
                })
                .catch(err => {  // catch any kind of error and fire function(s)
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);  // print the error on browser
                    }
                });
        }, 500)  // 500 ms
        return () => abortCont.abort();
    }, [url]);  // [e.g., data]: dependency, when url changes, it's gonna rerun this function;
    // []: only run the function after the initial render

    return {data, isPending, error}  // properties: blog, true/false, error
}

export default useFetch;