import { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch = ({
    url,
    renderData,
    renderLoading = <p>Loading...</p>,
    renderError = (e) => <p>Error: {e}</p>
}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    const CancelToken = axios.CancelToken;

    useEffect(() => {
        let cancel;
        axios.get(url, {
            cancelToken: new CancelToken(c => {
                console.log(`Axios request canceled:`);
                cancel = c;
            })
        })
            .then(res => setData(res))
            .then(() => setLoading(false))
            .catch(setError);

        return () => cancel();
    }, [url]);

    // return (
    //     (loading && renderLoading) ||
    //     (data && renderData(data)) ||
    //     (error && renderError(error))
    // );
    if (loading) return renderLoading;
    if (data) return renderData(data);
    if (error) renderError(error);

};

export default Fetch;