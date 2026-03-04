import { GallerySection } from "@/components/GallerySection";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-36 pb-12">
            <div className="max-w-[96%] mx-auto px-4 md:px-8 mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading text-secondary font-medium tracking-tight uppercase leading-[0.9]">
                    Portfolyo
                </h1>
                <p className="font-script text-primary text-3xl md:text-4xl tracking-wide drop-shadow-sm mt-8">
                    Tüm Çalışmalarımız
                </p>
            </div>
            {/* filterType "all" overrides limit and shows everything since we didn't pass a limit prop */}
            <GallerySection filterType="all" />
        </main>
    );
}
