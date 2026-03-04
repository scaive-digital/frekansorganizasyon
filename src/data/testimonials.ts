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
    {
        id: "t6",
        name: "Sema Düşünen",
        role: "Gelin",
        content: "Sevgili Ayşe ve Deniz bu rüya gibi düğünü bize yaşattığınız için çok teşekkür ederiz. Sizlerle çalıştığımız süreçte bizi hiç üzmediniz, hayal kırıklığına uğratmadınız yine olsa yine tercihim siz olursunuz. İyi ki yollarımız kesişip tanışmışız. Dilerim başarılarınız daim hayalleriniz gerçek olsun."
    },
    {
        id: "t7",
        name: "Serra Şeyma Acar",
        role: "Gelin",
        content: "Hayatımın en büyük şansını sizi tanıyarak kullandım. Hayatımın en güzel en özel gününü sizin sayenizde mükemmel geçirdim. Her şey hayallerimin ötesinde kusursuzdu. Aile olduk, arkadaş olduk, abla kardeş olduk. Herkes tüm gece salona organizasyona hayran kaldı. İyi ki yollarımız kesişmiş, iyi ki tanışmışız."
    },
    {
        id: "t8",
        name: "Eda",
        role: "Kına Gelini",
        content: "15 günde nasıl bu kadar güzel bir kına organize ettiniz siz? Emeğinize yüreğinize sağlık, her konuştuğumuzda beni rahatlattın yanımda oldun. Hayalimden de güzel bir kına gecesi yaşattınız bana, o kadar güzeldi ki inanılmazdı bütün detaylar harikaydı kusursuzdu. İyi ki Frekans dediğim bir gece yaşattınız."
    },
    {
        id: "t9",
        name: "Ayşe",
        role: "Kına Gelini",
        content: "Salona ilk girdiğimdeki yüz ifademi hatırladığına eminim zaten ikimizin de gözleri doldu... Hayalimden de güzel bir organizasyon yaptınız bana. Hep bana güven ben halledeceğim dedin öyle de oldu, her aradığımda aynı özenle açtın o telefonu ne kadar minnettar olsam az. Hayatımda daha tatlı 2 kız kardeş tanımadım, işinizde çok iyisiniz."
    },
    {
        id: "t10",
        name: "Emine",
        role: "Gelin",
        content: "En büyük teşekkürümüz size, her şey muazzam ötesiydi, masal diyarında gibi hissettirdiniz adeta hem kına hem düğün. Özellikle o canlı çiçekler her yer mis gibi kokuyordu. Elinize emeğinize yüreğinize sağlık. İşinizi severek yapıyorsunuz ve bu kadar yansıyor ki iyi ki varsınız."
    },
    {
        id: "t11",
        name: "Senanur Ertürk",
        role: "Nişan Gelini",
        content: "Hayalimizdeki nişan organizasyonunu gerçeğe dönüştürdüğünüz için çok teşekkür ederiz. Her detay özenle düşünülmüş, her şey tam da istediğimiz gibiydi. Emeğiniz ve zarafetiniz için minnettarız."
    },
    {
        id: "t12",
        name: "Betül Cihan",
        role: "Kına Gelini",
        content: "Yaaa Ayşe hanımm ne diyeceğimi nasıl teşekkür edeceğimi bilmiyorum harika olduğunuzu zaten biliyordum ama ne yalan söyleyeyim bu kadarını da beklemiyordum. Her şey o kadar detaylarıyla mükemmel ve uyumluydu ki Allah'ım iyi ki yolumu sizlere düşürmüş. Hele o inanılmaz büyük sürpriziniz... Bir ömür kalbimde bambaşka yerde olacaksınız. Bu işe kalbinizi katıp rüya gibi sonuç çıkardınız tüm misafirlerim detayların güzelliğinden bahsetti."
    },
    {
        id: "t13",
        name: "Beyzanur Öztürk",
        role: "Gelin",
        content: "Deniz hanımcım, Ayşe hanımcım siz birer efsanesiniz dün harikalar yarattınız her şey o kadar eşsiz ve mükemmeldi ki aldığım güzel yorumların haddi hesabı yok. İyi ki sizle yollarımız kesişmiş iyi ki siz. Sizi çok seviyorum."
    },
    {
        id: "t14",
        name: "Ayşe Nur Kuru",
        role: "Kına Gelini",
        content: "Ben o kadar eğlenmişim ki yeni kendime geldim. Sizi gerçekten çok sevdim her istediğimi en güzel şekilde gördüm, isteklerim ne güzel anlaşılmış dedim. Salona girdiğimde o kadar mutlu oldum ki bütün stres heyecan gitti yerini mutluluk aldı. Hiç unutamayacağım bir kına gecesi yaşattınız, her gelen biz böyle güzel bir kınaya gitmedik demişler. Enerjinizin bana destek oluşu çok güzeldi, şahaneydiniz."
    },
    {
        id: "t15",
        name: "İlknur",
        role: "Kına Gelini",
        content: "Deniz hanım günaydın, size ayrı teşekkür etmek istedim ilk günden beri hep yanımdaydınız ilginiz samimiyetiniz tatlılığınızla bana o güveni vermiştiniz. Dün gece muhteşemdi her konuda her detayla yani ne desem az kalır, içerideki uyuma bayıldım ilk gördüğümde işte tam olarak bunu istiyordum dedim. İyi ki karşılaştık, bi abla gibi görüyorum artık sizi. Her şey için çok teşekkür ederim gece boyu halimden belliydi zaten o kadar keyifliydim ki hepsi sizin emeğiniz sayesinde."
    },
    {
        id: "t16",
        name: "Merve Erol",
        role: "Gelin",
        content: "Yaa çok teşekkür ederim valla iyi ki sizle tanışmışız ben de hep çok rahattım yani hiç düşünmedim hele kınada tamamen salmış durumdaydım herkes konuşuyor zaten sizin ilginizi her şey çok güzeldi."
    },
    {
        id: "t17",
        name: "Büşra",
        role: "Gelin",
        content: "Her şey için çok çok çok teşekkür ederim çok çok mutlu ettin beni, verdiğin güvenden daha fazlasını verdin hissettirdin tanıştığıma çok çok memnun oldum kınamda kesin düğünde de olması için uğraşacağım kesinlikle sana teslim etmek isterim."
    },
];
