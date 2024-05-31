import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import fetchProducts from "../../Store/Products/Products.async.Actions";

const Home = () => {
    const data = useAppSelector((state) => state.products.data)
    const status = useAppSelector((state) => state.products.status)
    const dispatch = useAppDispatch();

    useEffect (() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if (status === 'failed') return <div>Error Happened!</div>

    return (
        <div>
            {status === "loading" && <p>Loading...</p>}
            {status === "loaded" && (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <h2>{item.slug}</h2>
                            <img src={`http://localhost:3000/Products${item.image.desktop}`} alt={item.slug} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Home;