const heroData = [
  {
    id: "0ld0qvru-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://image.shutterstock.com/image-photo/blue-shoes-on-guy-studio-260nw-600199742.jpg",
    name: "Blue shoes on a guy",
    price: 10.95
  },
  {
    id: "0o6r76vt-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Robes",
    cover: "https://img.freepik.com/free-vector/set-fashion-model-character_1308-26180.jpg?size=626&ext=jpg&ga=GA1.2.59563864.1607610129",
    name: "Set of fashion model character Free Vector",
    price: 5.99
  },
  {
    id: "0u96q42u-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Costumes",
    cover: "https://thumbs.dreamstime.com/b/side-view-cool-dark-skinned-man-stylish-suit-touching-his-black-hat-looking-down-closeup-portrait-fashionable-african-170585815.jpg",
    name: "Cool african american man in black hat on dark background",
    price: 23.99
  }
]


const stockData = [
  {
    id: "0ld0qvru-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/21ed2dec-16a4-4a61-b916-1b590a9ab32f-683x1024.jpg",
    name: "Fashion style",
    price: 10.95
  },
  {
    id: "0o6r76vt-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Robes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/09/robe-6-683x1024.jpg",
    name: "Fashion style",
    price: 5.99
  },
  {
    id: "0u96q42u-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Costumes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2019/07/Costume-Homme-un-bouton-couleur-noir.jpg",
    name: "Fashion style",
    price: 23.99
  },
  {
    id: "2rb37qw5-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/SLIPPER-Homme-en-cuir-marron-deux-pompons.png",
    name: "Fashion style",
    price: 12.96
  },
  {
    id: "3k9zka2c-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Robes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/06/robe4.jpg",
    name: "Fashion style",
    price: 65.00
  },
  {
    id: "3sbvndpe-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Costumes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Veste-chic-pour-Homme-en-bleu-avec-des-rayures.jpg",
    name: "Fashion style",
    price: 25.99
  },
  {
    id: "5oekg7gl-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Tennis-homme-en-bleu-blanc-rouge.png",
    name: "Fashion style",
    price: 10
  },
  {
    id: "623gsnj1-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Robes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Robe-femme-evasee-black-and-white.png",
    name: "Fashion style",
    price: 49
  },
  {
    id: "8u6lpj3e-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Costumes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Veste-chic-pour-Homme-en-bleu-cintree.jpg",
    name: "Fashion style",
    price: 17.99
  },
  {
    id: "917h7iji-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Chaussure-homme-chic-en-deux-tons.png",
    name: "Fashion style",
    price: 19.99
  },
  {
    id: "9vp96t5a-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Robes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/10/Untitled-17-683x1024.jpg",
    name: "Fashion style",
    price: 55.99
  },
  {
    id: "bsx7u3xv-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Costumes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Costume-chic-pour-Homme-en-violet.jpg",
    name: "Fashion style",
    price: 19
  },
  {
    id: "o3ahe30e-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Chaussure-deux-pompons-homme-de-luxe.png",
    name: "Fashion style",
    price: 55.96
  },
  {
    id: "q8qfaonc-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Robes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/09/Untitled-3-683x1024.jpg",
    name: "Fashion style",
    price: 80.99
  },
  {
    id: "tj8mc0yd-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Costumes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Costume-Homme-deux-boutons-couleur-grise.jpg",
    name: "Fashion style",
    price: 45.98
  },
  {
    id: "wh9yiu5w-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Chaussure-homme-en-noir-deux-tons.png",
    name: "Fashion style",
    price: 28.96
  },
  {
    id: "xfpwqd2u-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Robes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/10/Untitled-19-683x1024.jpg",
    name: "Fashion style",
    price: 80.99
  },
  {
    id: "zceo3fdn-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "Costumes",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Costume-Homme-Carrele-3-pieces-noir.jpg",
    name: "Fashion style",
    price: 90.99
  },
  {
    id: "o3ahe30e-d98b-11e8-9y8b-f2801f1b9fd1",
    category: "Chaussures",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Paire-monsieur-en-cuir-deux-tons-trois-boucles.png",
    name: "Fashion style",
    price: 19.96
  }
]

// make an array of different category
const arrCategory = Object.keys(stockData.map((item) => item.category).reduce((a, categ)=>{
  a[categ] = a[categ] + 1 || 1;
  return a
}, {}));

// An object with category as keys and occurence number as value 
let dataItems = stockData.map((item) => item.category).reduce((a, categ)=>{
  a[categ] = a[categ] + 1 || 1;
  return a
}, {})

// make all values as empty array from "dataItems"
arrCategory.map(categ => dataItems[categ] = []);

// group items based on their category
stockData.map((item) => dataItems[item.category].push(item) );



export {
  heroData,
  dataItems,
  arrCategory,
}