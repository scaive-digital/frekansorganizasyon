export interface Service {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    image: string;
    features: string[];
    category: 'weddings' | 'engagement' | 'henna' | 'corporate' | string;
}

export const services: Service[] = [
    {
        id: "1",
        slug: "weddings",
        title: "Düğün Organizasyonu",
        subtitle: "Hayatınızın en özel gününü masala dönüştürüyoruz",
        description: "Kusursuz planlama, zarif detaylar ve profesyonel ekibimizle hayalinizdeki düğünü gerçeğe dönüştürüyoruz. Mekan süslemesinden müzik seçimine kadar her anınızı özenle tasarlıyoruz.",
        icon: "rings",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000",
        features: ["Mekan Süsleme", "Ses & Işık Sistemleri", "Fotoğraf & Video", "Gelin Yolu", "LCV Yönetimi"],
        category: "weddings"
    },
    {
        id: "2",
        slug: "henna",
        title: "Kına Gecesi",
        subtitle: "Geleneksel ve modern dokunuşların muhteşem uyumu",
        description: "Kına tahtından konsept süslemelere, nedimelerden özel şovlara kadar eksiksiz ve unutulmaz bir kına gecesi deneyimi sunuyoruz.",
        icon: "moon",
        image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&q=80&w=2000",
        features: ["Kına Tahtı", "Nedime Ekibi", "Konsept Süsleme", "Özel Şovlar", "Hediyelikler"],
        category: "henna"
    },
    {
        id: "3",
        slug: "corporate",
        title: "Kurumsal Etkinlikler",
        subtitle: "Markanızın gücünü yansıtan profesyonel davetler",
        description: "Lansman, şirket yemeği, bayi toplantıları ve kurumsal partilerde markanıza uygun 'A46' standardında premium konseptler.",
        icon: "building",
        image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2000",
        features: ["Sahne Tasarımı", "Catering", "Karşılama", "Lansman Konsepti", "Teknik Prodüksiyon"],
        category: "corporate"
    },
    {
        id: "4",
        slug: "engagement",
        title: "Nişan & Söz Törenleri",
        subtitle: "Birlikteliğe atılan ilk adımda yanınızdayız",
        description: "İster ev ortamında samimi bir kutlama, ister görkemli bir salonda rüya gibi bir davet... Nişan masası tasarımından ikramlara kadar her detayı planlıyoruz.",
        icon: "heart",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2000",
        features: ["Arka Fon ve Tag", "Nişan Tepsisi", "İkram Masası", "Konsept Çiçekler", "Kişiye Özel Tasarım"],
        category: "engagement"
    }
];
