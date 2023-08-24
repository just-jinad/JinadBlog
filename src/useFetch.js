import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [blogs, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortMessage = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortMessage.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error("your get request cannot be authenticated")
                    }
                    return res.json()
                })

                .then(data => {
                    setData(data)
                    setPending(false)
                    setError(null)
                })

                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("operation succesful");
                    }else{


                        setError(err.message)
                        setPending(false)
                    }
                })
        }, 1000);

        return ()=> abortMessage.abort();    
    }, [url])

    return { blogs, isPending, error }
}

export default useFetch;