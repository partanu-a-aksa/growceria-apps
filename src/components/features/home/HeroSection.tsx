"use client"

import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { HeroSlide, getHeroSlides } from "@/lib/mock-data/hero-slides"

export function HeroSection() {
    const slides = getHeroSlides()
    const plugin = Autoplay({ delay: 5000, stopOnInteraction: true })

    return (
        <section className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-7xl px-4">
                <Carousel plugins={[plugin]}>
                    <CarouselContent>
                        {slides.map((slide) => (
                            <CarouselItem key={slide.id}>
                                <Link href={slide.ctaLink} className="block">
                                    <div className="relative h-[500px] cursor-pointer">
                                        <Image
                                            src={slide.image}
                                            alt={slide.id}
                                            fill
                                            className="object-cover rounded-4xl"
                                        />
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hover:bg-primary-500 hover:scale-150 transition-all" />
                    <CarouselNext className="hover:bg-primary-500 hover:scale-150 transition-all" />
                </Carousel>
            </div>
        </section>
    )
}


