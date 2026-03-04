export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Sümeyye",
        role: "Düğün Gelini",
        content: "Ayşe hanım dün için çok teşekkür ederiz her şey mükemmeldi. Bu süreçte resmen bana danışman ve süreç arkadaşı oldunuz. Hiç bitmeyen enerjiniz her zaman moral motivasyon oldu bana. Ellerinize emeğinize sağlık, sizi çok seviyoruz."
    },
    {
        id: "t2",
        name: "Zişan Arı",
        role: "Kına Gelini",
        content: "Ayşeciğim, Denizciğim siz neler yaptınız neler... Hala inanamıyorum, aşırı mutluyum. İyi ki siz, hayallerimin ötesindeydi her şey. Tüm süreç ve enerjiniz için çok çok teşekkür ederim."
    },
    {
        id: "t3",
        name: "Hülya",
        role: "Gelin",
        content: "Dün gece neydi öyle! O kadar özenliydi ki her detaya ayrı ayrı aşık oldum. Masalar, süslemeler, ışıklar, atmosfer... hepsi birbirinden güzeldi! Enerjiniz ve samimiyetiniz içimi öyle rahatlattı ki süreç boyu hiç stres yaşamadım. Sadece işinizi yapmakla kalmadınız, kalbinizi de koydunuz. Bana hayatım boyunca unutamayacağım bir gece yaşattınız, çok teşekkürler."
    },
    {
        id: "t4",
        name: "Betül",
        role: "Gelin",
        content: "Ayşe hanım, Deniz hanım, her şey o kadar güzel ve kusursuzdu ki, bu özel günümüzü unutulmaz kıldığınız için size gönülden teşekkür ederim. Detaylara gösterdiğiniz özen, güler yüzünüz ve profesyonelliğinizle her şeyi bizim yerimize düşünüp hayal ettiğimizden bile güzel hale getirdiniz."
    },
    {
        id: "t5",
        name: "Basel",
        role: "Düğün Sahibi",
        content: "Dünkü muhteşem organizasyon ve verdiğiniz emekler için hepinize teşekkür ederiz. Gerçekten her şey kusursuzdu. Günümüzü unutulmaz kılmak için gösterdiğiniz çaba bizim için çok değerliydi. Tüm misafirlerimiz geceyi büyük bir mutlulukla ve keyifle geçirdi. Emeğinize, ilginize ve desteğinize minnettarız."
    },
];
