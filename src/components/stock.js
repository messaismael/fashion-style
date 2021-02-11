const heroData = [
  {
    id: "0ld0qvru-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Costume-chic-pour-Homme-en-violet.jpg",
    name: "fake name fashion 1",
    price: 10.95
  },
  {
    id: "0o6r76vt-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion2",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Sebago-Homme-en-cuir-couleur-unique.png",
    name: "fake name fashion 2",
    price: 5.99
  },
  {
    id: "0u96q42u-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion3",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/12/T-shirt-chapeau-homme-en-plusieurs-couleurs.png",
    name: "fake name fashion 3",
    price: 23.99
  }
]


const stockData = [
  {
    id: "0ld0qvru-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/35cf0332-477c-4cdc-ba8b-2aa0b1aa2376-683x1024.jpg",
    name: "Fashion style",
    price: 10.95
  },
  {
    id: "0o6r76vt-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion2",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/SLIPPER-Homme-en-cuir-marron-deux-pompons.png",
    name: "Fashion style",
    price: 5.99
  },
  {
    id: "0u96q42u-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion3",
    cover: "https://images.vinted.net/thumbs/310x430/02_01993_cno88HTJ7HjknY2R5KQYY7d8.jpeg?1612592127-ccfa3cc0b864ce8d229f55fba68c5167f2e8d387",
    name: "Fashion style",
    price: 23.99
  },
  {
    id: "2rb37qw5-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://images.vinted.net/thumbs/310x430/02_00663_SQhQpkgx9jgSWZB47fGAgA8G.jpeg?1613055236-b7ebde0a4bf7231480f420db7f80d063d7e02ec9",
    name: "Fashion style",
    price: 12.96
  },
  {
    id: "3k9zka2c-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion2",
    cover: "https://images.vinted.net/thumbs/310x430/02_0071c_NGojgVLb5kJujAiJZsKYexhZ.jpeg?1612945579-7bc92168d958c42d1c12e8aff348d39eb7c6adb8",
    name: "Fashion style",
    price: 65.00
  },
  {
    id: "3sbvndpe-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion3",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Ceinture-DIOR-homme-en-Cuire-avec-des-strates.jpg",
    name: "Fashion style",
    price: 25.99
  },
  {
    id: "5oekg7gl-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2020/11/Montre-Chic-FORECAST-en-plaque-couleur-unique.jpg",
    name: "Fashion style",
    price: 10
  },
  {
    id: "623gsnj1-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion2",
    cover: "https://images.vinted.net/thumbs/310x430/02_019f2_7ZUeR6wTbKK8jMDmY4W7kjGK.jpeg?1613055485-07ee0966d1427dc04b2c1b84c8418ffdbf8f36fe",
    name: "Fashion style",
    price: 49
  },
  {
    id: "8u6lpj3e-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion3",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2021/01/Chaussure-homme-en-noir-deux-tons.png",
    name: "Fashion style",
    price: 17.99
  },
  {
    id: "917h7iji-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2019/06/M7-683x1024.jpg",
    name: "Fashion style",
    price: 19.99
  },
  {
    id: "9vp96t5a-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion2",
    cover: "https://images.vinted.net/thumbs/310x430/02_02343_dmYCrGtQTDKafiYNFMWGaNxZ.jpeg?1612968065-27281533390cc2cfc9579f15b68938ba5083e75f",
    name: "Fashion style",
    price: 55.99
  },
  {
    id: "bsx7u3xv-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion3",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2019/06/chemise-7-683x1024.jpg",
    name: "Fashion style",
    price: 19
  },
  {
    id: "o3ahe30e-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://images.vinted.net/thumbs/310x430/02_00b5a_M4gWxCTrrCQcLgb4YmiYJz8N.jpeg?1613053605-562b896ce11dbdada099b8e73bb8e93dda7b5aee",
    name: "Fashion style",
    price: 55.96
  },
  {
    id: "q8qfaonc-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion2",
    cover: "https://images.vinted.net/thumbs/310x430/02_00560_5pEEt3FEeTr8Yk4CNtdK4Nuz.jpeg?1612796942-85b37803f933fb7482750cbfb48bea0f35e89e00",
    name: "Fashion style",
    price: 80.99
  },
  {
    id: "tj8mc0yd-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion3",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/03/Black-Flared-Bell-Sleeve-Knit-Blouse-LC25940-2-3-683x1024.jpg",
    name: "Fashion style",
    price: 45.98
  },
  {
    id: "wh9yiu5w-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/03/Black-V-Neck-Short-Batwing-Sleeve-High-Elastic-Waist-Blouse-LC25788-2-3-683x1024.jpg",
    name: "Fashion style",
    price: 28.96
  },
  {
    id: "xfpwqd2u-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion2",
    cover: "https://www.ledetaillant.biz/wp-content/uploads/2018/03/Orange-Comfy-Short-Sleeve-Basic-Long-T-shirt-LC25797-14-2-683x1024.jpg",
    name: "Fashion style",
    price: 80.99
  },
  {
    id: "zceo3fdn-d93b-11e8-9f8b-f2801f1b9fd1",
    category: "fashion3",
    cover: "https://images.vinted.net/thumbs/310x430/02_01b39_X6RLTUmSaeMR5K6oVB9qTWNf.jpeg?1612882275-464076df96b9f453d6d59dffb089ca62ae2e6bdf",
    name: "Fashion style",
    price: 90.99
  },
  {
    id: "o3ahe30e-d98b-11e8-9y8b-f2801f1b9fd1",
    category: "fashion1",
    cover: "https://images.vinted.net/thumbs/310x430/02_02430_uQ16T4CTWYa7escmbqo5Eot2.jpeg?1612882519-9a0a7e1351d2e857193dd44acc7616a030c45fea",
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