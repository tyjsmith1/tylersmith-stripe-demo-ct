import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
            <Image
                src="/assets/closet1.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />
            <div className="container mx-auto px-4 md:px-6 flex justify-center items-center h-full relative z-10">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none gradient-text">
                            Welcome to Cozy Threads
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                            Experience the ultimate comfort with our super soft clothes.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button>Shop Now</Button>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}