
const Alert = ({ type }) => {
    return (
        <>

            {type == 'success' ?
                <div className="flex items-center justify-center w-full h-full text-green-800 bg-green-100 rounded-lg" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-2 animate-pulse" id="dur"><path d="M197-197q-54-55-85.5-127.5T80-480q0-84 31.5-156.5T197-763l57 57q-44 44-69 102t-25 124q0 67 25 125t69 101l-57 57Zm113-113q-32-33-51-76.5T240-480q0-51 19-94.5t51-75.5l57 57q-22 22-34.5 51T320-480q0 33 12.5 62t34.5 51l-57 57Zm170-90q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm170 90-57-57q22-22 34.5-51t12.5-62q0-33-12.5-62T593-593l57-57q32 32 51 75.5t19 94.5q0 50-19 93.5T650-310Zm113 113-57-57q44-44 69-102t25-124q0-67-25-125t-69-101l57-57q54 54 85.5 126.5T880-480q0 83-31.5 155.5T763-197Z" /></svg>
                    <strong className="mr-4 font-bold text-md">Sensors online!</strong>
                </div>

                :

                <div className="flex items-center justify-center w-full h-full text-red-800 bg-red-100 rounded-lg" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-2"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" /></svg>
                    <strong className="mr-4 font-bold text-md">Sensor connection lost!</strong>
                </div>
            }
        </>
    )
}

export default Alert
