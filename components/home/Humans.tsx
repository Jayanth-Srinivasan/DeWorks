import Image from 'next/image'
import React from 'react'

const Humans = () => {
    return (
        <main className="w-full pt-[50px] md:pt-[80px] p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
            <section className="flex justify-between items-center w-full">
                <Image
                    src={"/assets/person1.svg"}
                    className="w-16 md:w-24 lg:w-40"
                    alt="person1"
                    width={100}
                    height={100}
                />
                <Image
                    src={"/assets/person2.svg"}
                    className="w-16 md:w-24 lg:w-40"
                    alt="person2"
                    width={100}
                    height={100}
                />
                <Image
                    src={"/assets/person3.svg"}
                    className="w-16 md:w-24 lg:w-40"
                    alt="person3"
                    width={100}
                    height={100}
                />
                <Image
                    src={"/assets/person4.svg"}
                    className="w-16 md:w-24 lg:w-40"
                    alt="person4"
                    width={100}
                    height={100}
                />
                <Image
                    src={"/assets/person5.svg"}
                    className="w-16 md:w-24 lg:w-40"
                    alt="person5"
                    width={100}
                    height={100}
                />
            </section>
        </main>
    );
}

export default Humans