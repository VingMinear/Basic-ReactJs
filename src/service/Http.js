// const HttpGet = async (url) => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     setTimeout((url) => {
//         fetch().then((res) => {
//             if (!res.ok) {
//                 throw Error('could not fetch data');
//             }
//             console.log(res);
//             return res.json();
//         }).then((data) => {
//             setError(null);
//             setLoading(false);
//             setData(data);
//         }).catch((error) => {
//             setError(error.message);
//             setLoading(false);
//         });
//     }, 1000)

//     return { data, isLoading, error }
// }

// export default FetchProduct;