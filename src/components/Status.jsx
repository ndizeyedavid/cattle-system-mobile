
const Status = ({ tracking, temperature, co, ammonia }) => {
    // console.log(temperature);
    return (
        <>
            {tracking == 'true' ? <h4 className="p-3 mt-2 text-lg font-bold text-green-600 badge animate-pulse" id="dur">Tracking</h4 > : <h4 className="p-3 mt-2 text-lg font-bold text-red-600 badge" id="dur">Lost connection</h4>}

            <div className="flex items-start justify-between mt-5">
                <span>Temperature</span>
                <span className="p-3 badge">{temperature}<sup>o</sup>C</span>

            </div>

            <div className="flex items-start justify-between mt-5">
                <span>CO<sub>2</sub></span>
                <span className="p-3 badge">{co} %</span>
            </div>

            <div className="flex items-start justify-between mt-5">
                <span>Ammonia Level</span>
                <span className="p-3 badge">{ammonia} %</span>
            </div>
        </>
    )
}

export default Status
