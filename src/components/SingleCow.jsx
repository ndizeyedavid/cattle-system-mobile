import { useEffect, useState } from 'react';
import Status from './Status'
import Danger from './Danger'
import { Link } from "react-router-dom";

const SingleCow = ({ name, img, tracking, id }) => {
    const [temperature, setTemperature] = useState(0);
    const [co, setCo] = useState(0);
    const [ammonia, setAmmonia] = useState(0);

    useEffect(() => {
        async function fetchStatus() {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/cattle/status?id=' + id)
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            if (data.length > 0) {
                                const fin = data[0];
                                setTemperature(fin.temperature);
                                setCo(fin.co2);
                                setAmmonia(fin.ammonia);

                            }

                        })
                })
        }

        setInterval(fetchStatus, 1550)
    }, [])
    return (
        <>
            <div className="relative z-50 p-3 overflow-hidden bg-gray-100 rounded-lg cursor-pointer group hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                {temperature > 50 ? <Danger /> : null}

                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src={img} alt="product1"
                        className="object-cover w-full h-full" />
                </div>

                <div className="absolute left-0 right-0 w-11/12 p-3 mx-auto transition-all duration-300 bg-white rounded-lg -bottom-80 group-hover:bottom-2">
                    <div className="text-center">
                        <h3 className="text-base font-bold text-gray-800">{name}</h3>

                        <Status tracking={tracking} temperature={temperature} ammonia={ammonia} co={co} />

                        {/* <Link to={"/track/" + id} type="button"
                            className="h-6 p-0 px-10 mt-5 rounded-full btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCow
