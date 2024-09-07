import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const Setting = () => {
    const [pushNotifications, setPushNotification] = useState('false');
    useEffect(() => {
        const fetchSetting = async () => {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/settings/view')
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            const out = data;
                            setPushNotification(out.push_notifications);
                            // setProfile(out.profile);
                            // console.log(data.cont[0])

                        })
                })
        }
        setInterval(fetchSetting, 1000)
    }, [])

    async function updateSettings(state) {
        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + `/settings/notification?option=${state}`)
            .then(d => {
                const result = d.json()
                    .then(data => {
                        const out = data;
                        // setProfile(out.profile);
                        // console.log(data.cont[0])

                    })
            })
    }
    async function resetNotifications() {
        const toastId = toast.loading('Resetting Notifications...');
        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + `/settings/notification/reset`)
            .then(d => {
                const result = d.json()
                    .then(data => {
                        const out = data;
                        toast.success('All notifications deleted', {
                            id: toastId
                        });
                        // setProfile(out.profile);
                        // console.log(data.cont[0])

                    })
            })
    }

    async function deleteHistory() {
        const toastId = toast.loading('Deleting history data...');
        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + `/settings/delete/history`)
            .then(d => {
                const result = d.json()
                    .then(data => {
                        const out = data;
                        toast.success('The history tab is good as new', {
                            id: toastId
                        });
                        // setProfile(out.profile);
                        // console.log(data.cont[0])

                    })
            })
    }
    return (
        <>
            <Toaster />

            <section className="flex flex-col h-full gap-16 p-6 overflow-y-auto text-gray-900">
                <fieldset className="relative grid grid-cols-4 gap-6 p-6 mt-5 rounded-md shadow-sm bg-gray-50">

                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Notifications</p>
                        <p className="text-xs">Control how the notifications will appear</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                        <div className="flex items-center gap-14 col-span-full">
                            <label htmlFor="address" className="text-sm">Receive all notifications via E-mail</label>
                            {pushNotifications == 'true' ? <input type="checkbox" onChange={() => updateSettings('false')} className="toggle" defaultChecked /> : <input type="checkbox" onChange={() => updateSettings('true')} className="toggle" />}
                        </div>

                    </div>

                </fieldset>


                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Informative logs</p>
                        {/* <p className="text-xs">Your secret credentials to login into the system!</p> */}
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                            <div className="flex items-center gap-x-5" aria-label="button-combination">
                                <button onClick={() => resetNotifications()} className="btn inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg h-[60px]">
                                    Reset Notifications
                                </button>
                                <button onClick={() => deleteHistory()} className="btn btn-outline btn-error inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide rounded-lg h-[60px]">
                                    Delete all history
                                </button>
                            </div>

                        </div>

                    </div>
                </fieldset>
            </section>
        </>
    )
}

export default Setting
