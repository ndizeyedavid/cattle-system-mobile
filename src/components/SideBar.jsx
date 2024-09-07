import { Link } from 'react-router-dom'
const SideBar = () => {
    function setActive() {
        // console.log('setting')
        const navLinks = document.querySelectorAll('.nav__link');
        // console.log(navLinks)
        const windowPathName = window.location.pathname;
        // console.log(windowPathName)
        navLinks.forEach(navLink => {
            const navLinkPathname = new URL(navLink.href).pathname;

            if (windowPathName === navLinkPathname) {
                navLink.classList.add('active');
            }
        });
    }
    // setActive()
    setTimeout(setActive, 50)
    return (
        <>
            <div className="fixed bottom-0 z[999999999] right-0 left-0 pt-12 bg-white sm:pt-16 lg:pt-24">
                <nav className="sticky bottom-0 w-full mx-auto sm:max-w-md">
                    <Link to="/track" className="absolute flex items-center justify-center w-12 h-12 text-white translate-x-[-18px] bg-indigo-500 shadow-lg -top-3 left-1/2 rounded-3xl hover:bg-indigo-600 sm:-top-8 sm:h-16 sm:w-16">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-6 h-6"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>

                    </Link>

                    <div className="flex justify-between gap-8 px-10 py-4 text-xs bg-white border-t sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
                        <Link to="/" className="flex flex-col items-center gap-1 mr-4 text-gray-400 nav__link hover:text-gray-500 active:text-gray-600 sm:mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-6 h-6"><path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" /></svg>
                            <span>Cattle</span>
                        </Link>

                        <Link to="/help" className="flex flex-col items-center gap-1 mr-4 text-gray-400 nav__link hover:text-gray-500 active:text-gray-600 sm:mr-8">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                                <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                            </svg>

                            <span>Document</span>
                        </Link>

                        <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-400 nav__link hover:text-gray-500 active:text-gray-600">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                            </svg>

                            <span>Profile</span>
                        </Link>

                        <Link to="/logout" className="flex flex-col items-center gap-1 ml-4 text-gray-400 nav__link hover:text-gray-500 active:text-gray-600 sm:ml-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6"
                                viewBox="0 0 6.35 6.35">
                                <path
                                    d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                    data-original="#000000" />
                            </svg>

                            <span>Logout</span>
                        </Link>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default SideBar
