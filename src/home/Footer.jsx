import React from 'react'

function Footer() {
    return (
        <>
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mx-auto bg-gray-200">
                        <div className="bg-gray-100 min-h-screen">

                            {/* Bottom Navigation */}
                            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-4 flex ">
                                <div className="text-blue-900 text-center">
                                    <i className="fas fa-home text-lg"></i>
                                    <p>Home</p>
                                </div>
                                <div className="text-blue-900 text-center">
                                    <i className="fas fa-th-large text-lg"></i>
                                    <p>Category</p>
                                </div>
                                <div className="text-blue-900 text-center">
                                    <i className="fas fa-wallet text-lg"></i>
                                    <p>Wallet</p>
                                </div>
                                <div className="text-blue-900 text-center">
                                    <i className="fas fa-user text-lg"></i>
                                    <p>Account</p>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer