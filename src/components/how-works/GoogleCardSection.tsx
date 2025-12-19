import Image from "next/image";
import React from "react";

// Define the type for each content item
interface GoogleCardContent {
    name: string;
    type: "text" | "media";
    data: string;
    media_ref?: string;
}

// Define the main Google Card Section type
interface GoogleCardSection {
    googleCardData: GoogleCardContent[];
}



const GoogleCards: React.FC<GoogleCardSection> = ({ googleCardData }) => {
    const googleImageMen = googleCardData[0]?.media_ref;
    const googleImage = googleCardData[3]?.media_ref;

    // googleCardData.forEach((item, index) => {
    //     console.log(`Google card data [${index}] ::::>`, item.data);
    // });


    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 w-full px-4 lg:px-12 mt-10"
        >
            {/* Card 1 - Wide */}
            <div className="lg:col-span-2 bg-brandlight shadow-md rounded-xl p-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="relative w-16 h-16">
                            {googleCardData && (

                                <Image
                                    src={googleImageMen as string}
                                    alt="Hailey Jones"
                                    fill
                                    className="object-cover rounded-full"
                                />
                            )}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 uppercase">
                                {googleCardData[1]?.data}
                            </p>
                            <p className="text-sm text-gray-800 font-bold">{googleCardData[2]?.data}</p>
                        </div>
                    </div>
                    {googleImage && (
                        <Image
                            src={googleImage}
                            alt="Google"
                            width={50}
                            height={50}
                        />
                    )}
                </div>
                <p className="mt-4 text-gray-800 text-sm">
                    {googleCardData[4]?.data}
                </p>
            </div>

            {/* Card 2 - Normal */}
            <div className="lg:col-span-1 bg-brandlight shadow-md rounded-xl p-4 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20">
                    {googleImageMen && (

                        <Image
                            src={googleImageMen}
                            alt="Hailey Jones"
                            fill
                            className="object-cover rounded-full"
                        />
                    )}
                </div>
                <p className="mt-3 font-semibold text-gray-800 uppercase text-sm">
                    {googleCardData[6]?.data}
                </p>
                <p className="text-xs text-gray-800 font-bold">{googleCardData[7]?.data}</p>
                <div className="pt-2">
                    {googleImage && (

                        <Image
                            src={googleImage}
                            alt="Google"
                            width={40}
                            height={40}
                        />
                    )}
                </div>
            </div>

            {/* Card 3 - Normal */}
            <div className="lg:col-span-1 bg-brandlight shadow-md rounded-xl p-4 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20">
                    {googleImageMen && (
                        <Image
                            src={googleImageMen}
                            alt="Hailey Jones"
                            fill
                            className="object-cover rounded-full"
                        />
                    )}
                </div>
                <p className="mt-3 font-semibold text-gray-800 uppercase text-sm">
                    {googleCardData[9]?.data}
                </p>
                <p className="text-xs text-gray-800 font-bold">{googleCardData[11]?.data}</p>
                <div className="pt-2">
                    {googleImage && (
                        <Image
                            src={googleImage}
                            alt="Google"
                            width={40}
                            height={40}
                        />
                    )}
                </div>
            </div>

            {/* Card 4 - Normal */}
            <div className="lg:col-span-1 bg-brandlight shadow-md rounded-xl p-4 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20">
                    {googleImageMen && (

                        <Image
                            src={googleImageMen}
                            alt="Hailey Jones"
                            fill
                            className="object-cover rounded-full"
                        />
                    )}
                </div>
                <p className="mt-3 font-semibold text-gray-800 uppercase text-sm">
                    {googleCardData[14]?.data}
                </p>
                <p className="text-xs text-gray-800 font-bold">{googleCardData[15]?.data}</p>
                <div className="pt-2">
                    {googleImage && (
                        <Image
                            src={googleImage}
                            alt="Google"
                            width={40}
                            height={40}
                        />
                    )}
                </div>
            </div>

            {/* Card 5 - Wide */}
            <div className="lg:col-span-2 bg-brandlight shadow-md rounded-xl p-5">
                <div className="flex items-center space-x-3">
                    <div className="relative w-16 h-16">
                        {googleImageMen && (

                            <Image
                                src={googleImageMen}
                                alt="Hailey Jones"
                                fill
                                className="object-cover rounded-full"
                            />
                        )}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 uppercase">
                            {googleCardData[18]?.data}
                        </p>
                        <p className="text-sm text-gray-800 font-bold">{googleCardData[19]?.data}</p>
                    </div>
                </div>
                <p className="mt-3 text-gray-800 text-sm">
                    {googleCardData[20]?.data}
                </p>
            </div>
        </div>
    );
};

export default GoogleCards;
