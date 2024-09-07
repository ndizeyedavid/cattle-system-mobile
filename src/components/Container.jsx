
const Container = ({ children }) => {
    return (
        <>
            <div className="w-full p-2" style={{ height: "calc(100vh - 100px)" }}>
                <div className="w-full h-full card">
                    {/* <button className="btn hover:bg-yellow-500">ads</button> */}
                    {children}
                </div>
            </div>
        </>
    )
}

export default Container
