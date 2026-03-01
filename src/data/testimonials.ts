export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Ayşe & Burak",
        role: "Düğün Çifti",
        content: "Hayal ettiğimizden çok daha fazlasıydı. Her detay o kadar özenliydi ki, bize sadece o anın tadını çıkarmak kaldı. Ekibin profesyonelliği muazzamdı."
    },
    {
        id: "t2",
        name: "Zeynep Yılmaz",
        role: "Kurumsal Etkinlik Yöneticisi",
        content: "Şirketimizin yıl sonu galasında Frekans Organizasyon ile çalıştık. Hem mekan tasarımı hem de akış yönetimi kusursuzdu. Kesinlikle tavsiye ederim."
    },
    {
        id: "t3",
        name: "Elif & Can",
        role: "Nişan Çifti",
        content: "Söz ve nişan organizasyonumuz için anlaştığımızda çok heyecanlıydık ama ekip bizi o kadar rahatlattı ki... Herkes konseptin zarafetini konuştu."
    },
    {
        id: "t4",
        name: "Merve Çelik",
        role: "Kına Gecesi Gelin Adayı",
        content: "Geleneksel motifleri bu kadar modern ve şık bir şekilde harmanlamaları tek kelimeyle harikaydı. Unutulmaz bir gece yaşadık."
    },
    {
        id: "t5",
        name: "Buse & Kerem",
        role: "Düğün Çifti",
        content: "Kusursuz planlama, güler yüzlü ekip ve vizyoner tasarım anlayışı... En mutlu günümüzü bir masala dönüştürdükleri için minnettarız."
    },
];
