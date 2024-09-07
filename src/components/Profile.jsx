import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');
    const [uname, setUname] = useState('');
    const [pswd, setPswd] = useState('');
    const [profile, setProfile] = useState('');
    useEffect(() => {
        const fetchUser = async () => {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/users/view')
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            const out = data.cont[0];
                            setFname(out.fname);
                            setLname(out.lname);
                            setEmail(out.email);
                            setPhone(out.phone);
                            setAddress(out.address);
                            setDistrict(out.district);
                            setProvince(out.province);
                            setUname(out.username);
                            setPswd(out.pswd);
                            setProfile(out.profile);
                            // setProfile(out.profile);
                            // console.log(data.cont[0])

                        })
                })
        }

        fetchUser()
    })

    // client Update personal infomation
    const updatePersonal = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Updating personal info...');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // console.log(data);

        const options = {
            method: "POST",
            body: JSON.stringify({
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                phone: data.phone,
                address: data.address,
                province: data.province,
                district: data.district,
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/users/update?category=personal', options)
            .then(d => {
                const result = d.json()
                    .then(data => {
                        if (data.status == 403) {
                            toast.error("Failed to update data", {
                                id: toastId,
                            });
                        }
                        if (data.status == 200) {
                            toast.success("Personal information updated", {
                                id: toastId
                            });
                        }
                        // console.log(data);
                    })
            })
        // console.log(e.target);

    }

    // client update password
    const updatePassword = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Updating Password info...');
        let oldPswd = pswd;
        if (prompt('Enter the old Password') == oldPswd) {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            // console.log(data);

            const options = {
                method: "POST",
                body: JSON.stringify({
                    pswd: data.pswd,
                }),

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            };

            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/users/update?category=pswd', options)
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            if (data.status == 403) {
                                toast.error("Failed to update password", {
                                    id: toastId,
                                });
                            }
                            if (data.status == 200) {
                                toast.success("Password updated", {
                                    id: toastId
                                });
                            }
                        })
                })
            // console.log(e.target);
        } else {
            toast.error("Passwords don't match", {
                id: toastId
            });
        }

    }

    // client update profile picture
    const updateProfile = async (e) => {
        const toastId = toast.loading('Updating profile picture...')
        // console.log(file.path)
        let file = e.target.files[0];
        // console.log(file.size);
        if (file.size < 1000000) {
            try {
                const reader = new FileReader();
                reader.readAsDataURL(file)
                reader.onload = async (e) => {
                    let img = e.target.result
                    const options = {
                        method: "POST",
                        body: JSON.stringify({
                            profile: img,
                        }),

                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    };
                    try {

                        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/users/update?category=profile', options)
                            .then(d => {
                                const result = d.json()
                                    .then(data => {
                                        if (data.status == 400) {
                                            toast.error("Failed to update profile", {
                                                id: toastId,
                                            });
                                        }
                                        if (data.status == 200) {
                                            document.getElementById('profile').src = img;
                                            toast.success("Profile updated", {
                                                id: toastId
                                            });
                                        }
                                    })
                            })
                    }
                    catch (error) {
                        toast.error("Profile failed to updated", {
                            id: toastId
                        });
                    }

                }
            } catch (error) {
                toast.error("Please specifiy the new image", {
                    id: toastId
                });
            }
        } else {
            toast.error("Image too large!", {
                id: toastId
            });
        }


    }
    return (
        <>
            <Toaster />

            <section className="h-full p-6 overflow-y-auto text-gray-900 bg-gray-100">
                <div className="container flex flex-col mx-auto space-y-12">
                    <form onSubmit={updatePersonal}>
                        <fieldset className="relative grid grid-cols-4 gap-6 p-6 pb-24 rounded-md shadow-sm bg-gray-50">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Personal Inormation</p>
                                <p className="text-xs">In case the briefcase is lost, One can see the following information to bring it back to you!</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">First name</label>
                                    <input required id="firstname" type="text" defaultValue={fname} placeholder="First name" name="fname" className="w-full px-5 py-3 bg-white border rounded-lg outline-none border-slate-200 focus:ring focus:ring-opacity-15 focus:ring-cyan-600" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="lastname" className="text-sm">Last name</label>
                                    <input required id="lastname" type="text" defaultValue={lname} placeholder="Last name" name="lname" className="w-full px-5 py-3 bg-white border rounded-lg outline-none border-slate-200 focus:ring focus:ring-opacity-15 focus:ring-cyan-600" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input required id="email" type="email" defaultValue={email} placeholder="Email" name="email" className="w-full px-5 py-3 bg-white border rounded-lg outline-none border-slate-200 focus:ring focus:ring-opacity-15 focus:ring-cyan-600" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="phone" className="text-sm">Phone</label>
                                    <input required id="phone" type="phone" defaultValue={phone} placeholder="Phone" name="phone" className="w-full px-5 py-3 bg-white border rounded-lg outline-none border-slate-200 focus:ring focus:ring-opacity-15 focus:ring-cyan-600" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Address</label>
                                    <input required id="address" type="text" defaultValue={address} placeholder="" name="address" className="w-full px-5 py-3 bg-white border rounded-lg outline-none border-slate-200 focus:ring focus:ring-opacity-15 focus:ring-cyan-600" />

                                </div>
                            </div>
                            {/* <div className="w-full h-3 bg-black"></div> */}
                            <div className="absolute w-full px-6 bottom-3">
                                <button type="submit" className="w-full px-4 py-2 border border-gray-800 rounded-md hover:bg-slate-200 active:scale-95">Update information</button>
                            </div>
                        </fieldset>
                    </form>


                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Profile</p>
                            <p className="text-xs">Your secret credentials to login into the system!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full">
                                <label htmlFor="username" className="text-sm">Username</label>
                                <input readOnly onClick={() => { toast.error('This field is very restricted, and you are not allowed to change it.') }} id="username" type="text" value={uname} placeholder="Username" className="w-full px-5 py-3 bg-white border rounded-lg outline-none border-slate-200 focus:ring focus:ring-opacity-15 focus:ring-cyan-600" />

                            </div>
                            <form method="POST" className="col-span-full" onSubmit={updatePassword}>
                                <div className="flex items-center justify-between">
                                    <div className="w-[87%]">
                                        <label htmlFor="pswd" className="text-sm">Password</label>
                                        <input id="pswd" type="password" name="pswd" placeholder="Password" className="w-full px-5 py-3 bg-white border rounded-lg outline-none border-slate-200 focus:ring focus:ring-opacity-15 focus:ring-cyan-600" required />
                                    </div>
                                    <button type="submit" className="px-4 py-2 border border-gray-800 rounded-md mt-7">Change</button>

                                </div>
                            </form>
                            <div className="col-span-full">
                                {/* <form method="post"> */}
                                <label htmlFor="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                    <img src={profile} id="profile" alt="Profile-Image" className="object-cover w-10 h-10 bg-gray-300 rounded-full" />
                                    <input type="file" name="profilePic" id="img" onChange={updateProfile} hidden />
                                    <button type="button" onClick={() => document.getElementById('img').click()} className="px-4 py-2 border border-gray-800 rounded-md">Change</button>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </fieldset>
                </div >
            </section >
        </>
    )
}

export default Profile
