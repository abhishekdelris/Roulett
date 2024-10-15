import React from 'react';

function Navbar() {
    return (<>
        <div className="max-w-7xl mx-auto ">
            <div className="flex flex-wrap ">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mx-auto bg-gray-200">
                    <div className="bg-gray-100 min-h-screen">

                        {/* Header Section */}
                        <header className="flex justify-between items-center p-4 bg-blue-900 text-white">
                            <div className="text-2xl font-bold">Khel <span className="font-light">Games</span></div>
                            <div className="flex space-x-4">
                                <i className="fas fa-bell text-lg"></i>
                                <i className="fas fa-envelope text-lg"></i>
                            </div>
                        </header>

                        {/* Banner Section */}
                        <section className="p-4">
                            <img
                                src="your-banner-url-here" // Replace with your banner image URL
                                alt="Banner"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </section>

                        {/* Alert Section */}
                        <section className="p-4">
                            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                                <p className="text-blue-900 font-semibold">Attention! Attention! To all KhelGames members...</p>
                                <button className="bg-blue-900 text-white py-1 px-4 rounded-full">Details</button>
                            </div>
                        </section>

                        {/* Categories Section */}
                        <section className="p-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-red-500 text-white p-4 rounded-lg text-center">Popular</div>
                                <div className="bg-green-500 text-white p-4 rounded-lg text-center">Lottery</div>
                                <div className="bg-purple-500 text-white p-4 rounded-lg text-center">Slots</div>
                            </div>
                        </section>

                        {/* Platform Recommendation */}
                        <section className="p-4">
                            <h2 className="text-blue-900 font-bold mb-4">Platform Recommendation</h2>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow text-center">
                                    <img src="aviator-icon-url" alt="Aviator" className="mx-auto mb-2" />
                                    Aviator
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow text-center">
                                    <img src="andar-bahar-icon-url" alt="Andar Bahar" className="mx-auto mb-2" />
                                    Andar Bahar
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow text-center">
                                    <img src="rummy-icon-url" alt="Rummy" className="mx-auto mb-2" />
                                    Rummy
                                </div>
                            </div>
                        </section>

                        {/* Popular Games */}
                        <section className="p-4">
                            <h2 className="text-blue-900 font-bold mb-4">Popular</h2>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow text-center">
                                    <img src="game1-url" alt="Royal Fishing" className="mx-auto mb-2" />
                                    Royal Fishing
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow text-center">
                                    <img src="game2-url" alt="10,000 Wishes" className="mx-auto mb-2" />
                                    10,000 Wishes
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow text-center">
                                    <img src="game3-url" alt="Mega Deluxe" className="mx-auto mb-2" />
                                    Mega Deluxe
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;
