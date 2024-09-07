import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Container from '../components/Container'

const Logout = () => {
    function logout() {
        document.cookie = "key=undefined";
        window.location.pathname = '/';
    }

    setTimeout(logout, 1500)


    return (
        <>
            <SideBar />
            <Header />
            <Container>
            </Container>
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">

                    <div className="my-4 text-center">
                        <h4 className="mt-4 text-xl font-semibold text-gray-800">Logging out. Please wait</h4>

                        <div className="mt-8 space-x-4 text-center">
                            <button type="button" onClick={() => window.history.back()}
                                className="px-4 py-2 text-sm text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 active:bg-gray-200">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout
