const productss = [
    {id: 0, title: "iPhone 7 Plus",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 2500, type: "Elektronik", counter:450, img:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/v2-83125-9_large.jpg",dealerid: 0},
    {id: 1, title: "Samsung Galaxy S10",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 3900, type: "Elektronik", counter:275,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1 }, 
    {id: 2, title: "HP Yazıcı",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 500, type: "Elektronik", counter:78,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0 }, 
    {id: 3, title: "Razer Klavye",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 1000, type: "Elektronik", counter:154,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0 },
    {id: 4, title: "Jordan Basketbol Topu",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 150, type: "Spor Eşyaları", counter:450, img:"https://productimages.hepsiburada.net/s/12/375/9182336679986.jpg",dealerid: 1},
    {id: 5, title: "Halter Seti",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 5000, type: "Spor Eşyaları", counter:48,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 6, title: "Beyzbol Sopası",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 400, type: "Spor Eşyaları", counter:32,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 7, title: "Nike Futbol Topu",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 200, type: "Spor Eşyaları", counter: 220,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 8, title: "Tofaş Şahin",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 60000, type: "Araba", counter: 155,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},     
    {id: 9, title: "Volkswagen Passat",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 500000, type: "Araba", counter:200, img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 10, title: "Seat Leon",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 300000, type: "Araba", counter: 304,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 11, title: "Porsche Cayenne",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 1500000, type: "Araba", counter: 150,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 12, title: "Kanepe Seti",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 15000, type: "Mobilya", counter: 53,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 13, title: "Ahşap Dolap",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 2000, type: "Mobilya", counter: 97,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 14, title: "Yatak",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 3000, type: "Mobilya", counter: 184,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 15, title: "Antika Koltuk",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 20000, type: "Mobilya", counter: 297,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 16, title: "Rayban Gözlük",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 700, type: "Moda", counter: 163,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 17, title: "Takım Elbise",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 1300, type: "Moda", counter: 281,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 18, title: "Siyah Çizme",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 700, type: "Moda", counter: 112,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 19, title: "Lacivert Mont",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 400, type: "Moda", counter: 260,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 20, title: "Pırlanta Yüzük",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 35000, type: "Saat ve Takı", counter: 210,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 21, title: "Rolex Saat",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 85000, type: "Saat ve Takı", counter:110,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 22, title: "Küpe",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 200, type: "Saat ve Takı", counter:192,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 23, title: "Altın Bilezik",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 7000, type: "Saat ve Takı", counter:250,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 24, title: "Harry Potter Serisi",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 500, type: "Kitap", counter:390,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 25, title: "Peter Pan",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 50, type: "Kitap", counter: 50,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 26, title: "Küçük Kara Balık",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 30, type: "Kitap", counter: 84,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 27, title: "Kuyucaklı Yusuf",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 70, type: "Kitap", counter: 116,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 28, title: "İsviçre Çakısı",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 210, type: "Diğer", counter: 290,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 1},
    {id: 29, title: "Casio Org",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 1000, type: "Diğer", counter: 375,img:"https://i.hizliresim.com/6lulexi.png",dealerid: 0},
    {id: 30, title: "Kum Saati",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 50, type: "Diğer", counter:422,img:  "https://img-betatea.mncdn.com/idea/as/75/myassets/products/014/ba3518.jpg?revision=1629967346",dealerid: 1},
    {id: 31, title: "Kahve Makinası",about:"Çok az kullanılmış temiz ürün. İsterseniz kargo ile isterseniz gelip alabilirsiniz", price: 1000, type: "Diğer", counter:880, img:"https://cdn.cimri.io/image/1000x1000/nespressocpixietitanespressowmlkahvemakinesi_427807110.jpg",dealerid:0}];
export default productss;