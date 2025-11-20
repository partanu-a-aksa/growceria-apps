

export interface HeroSlide {
    id: string;
    image: string;
    ctaLink: string;
}

export function getHeroSlides(): HeroSlide[] {
    return [
        {
            id: "1",
            image: "/hero-slide-1.jpg",
            ctaLink: "/slide-1",
        },
        {
            id: "2",
            image: "/hero-slide-2.jpg",
            ctaLink: "/slide-2",
        },
        {
            id: "3",
            image: "/hero-slide-3.jpg",
            ctaLink: "/slide-3",
        },
    ];
}