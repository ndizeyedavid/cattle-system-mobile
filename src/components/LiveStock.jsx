import { useEffect, useState } from 'react'
import SingleCow from './SingleCow'
import toast, { Toaster } from 'react-hot-toast';


const submitForm = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Adding a new cattle...');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    e.target.reset();

    const reader = new FileReader();
    reader.readAsDataURL(data.image)
    reader.onload = async (e) => {
        let cattle_id = data.id;
        let cattle_name = data.name;
        let img = e.target.result

        const options = {
            method: "POST",
            body: JSON.stringify({
                id: cattle_id,
                cattle_name: cattle_name,
                cattle_img: img
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/cattle/new', options)
            .then(d => {
                const result = d.json()
                    .then(data => {
                        if (data.status == 400) {
                            document.getElementById('modal_close').click();
                            toast.error("Operation failed, The Id you used is already registered in the system", {
                                id: toastId,
                            });
                        }
                        if (data.status == 200) {
                            document.getElementById('modal_close').click();
                            toast.success("Cattle Added", {
                                id: toastId
                            });
                        }
                    })
            })
    }



}

const LiveStock = () => {

    const [cattles, setCattles] = useState([]);
    useEffect(() => {
        async function fetchCattle() {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/cattle/view')
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            setCattles(data)
                        })
                })
        }
        fetchCattle()
        setInterval(fetchCattle, 1000)
    }, [])


    return (
        <>
            <Toaster />

            <div className="w-full px-5 py-4 mx-auto overflow-y-auto font-sans">
                <div className='mb-11'>
                    <h2 className="text-3xl font-extrabold text-center text-gray-800">Cows in the cowshed</h2>
                    {/* <button className='btn btn-primary' onClick={() => document.getElementById('new-cattle').showModal()}> Add New </button> */}
                </div>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                    {cattles.length == [] ? "Loading cattle data..." : null}
                    {cattles.map((data, index) => <SingleCow key={index} img={data.cattle_img} name={data.cattle_name} id={data.cattle_id} tracking="true" />)}

                </div>
            </div>
        </>
    )
}

export default LiveStock
