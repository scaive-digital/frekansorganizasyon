export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    image: string;
    span?: {
        row?: number;
        col?: number;
    };
}

export const galleryItems: GalleryItem[] = [
    {
        id: "g1",
        title: "Kristal Zarafeti: S&M",
        category: "Kişiye Özel Konsept",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000",
        span: { col: 2, row: 2 }
    },
    {
        id: "g2",
        title: "Büyülü Gül Konsepti",
        category: "Lüks Düğün",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000",
    },
    {
        id: "g3",
        title: "Misk-i Amber",
        category: "Kına",
        image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&q=80&w=2000",
        span: { row: 2 }
    },
    {
        id: "g4",
        title: "Boğaz'da Rüya Davet",
        category: "Kurumsal",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000",
    },
    {
        id: "g5",
        title: "Zarif Kır Nişanı",
        category: "Nişan",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2000",
        span: { col: 2 }
    },
];
