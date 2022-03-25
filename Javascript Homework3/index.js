const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
    {
      id: 10,
      title: "Lahmacun",
      category: "Turkey",
      price: 99.99,
      img:
        "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/01/hazir-lavastan-pratik-lahmacun-resimli-yemek-tarifi(15).jpg",
      desc: `God tier food. No need description`,
    },
  ];


const buttonContainer = document.querySelector("#btn-container");
buttonContainer.setAttribute("class", "btn-container");

//  All information in category keys gathered inside an array called "categories"
const categories = menu.map(function(e) {
  return e.category;
})

//  All information in title keys gathered inside an array called "titles"
let titles = menu.map(function(e) {
  return e.title;
})

//  All information in img keys gathered inside an array called "images"
const images = menu.map(function(e) {
  return e.img;
})

//  All information in desc keys gathered inside an array called "desc"
const desc = menu.map(function(e) {
  return e.desc;
})

//  All information in price keys gathered inside an array called "price"
const price = menu.map(function(e) {
  return e.price;
})


// "Categories" array reduced to unique array items
const reducedCategory = categories.reduce((previousValue, currentValue)=>{
  
  //  You can see the function step by step

  // console.log(
  //   currentValue,
  //   previousValue,
  //   previousValue.includes(currentValue),
  //   previousValue.includes(currentValue) ? previousValue: [...previousValue, currentValue],
  // );


  return previousValue.includes(currentValue) ? previousValue : [...previousValue, currentValue];
}, []); //  Doesn't function properly without first "empty array" to fill



// All elements visible via allButton
const allButton = document.createElement("button");
buttonContainer.appendChild(allButton);
allButton.setAttribute("class", "btn btn-outline-dark btn-item");
allButton.setAttribute("onclick", "allClick()");
allButton.innerHTML = "All";


// allButton function
function allClick() {
  for (let i=0; i<sectionDiv.length; i++){
      sectionDiv[i].classList.remove("hidden")
  }
}



//All buttons gathered inside "buttonArray"
const buttonArray = [];


// 
for (let i = 0; i < reducedCategory.length; i++) {
  let x = "clickFunction";
  const createdButton = document.createElement("button");
  buttonContainer.appendChild(createdButton);
  createdButton.setAttribute("class", "btn btn-outline-dark btn-item");
  createdButton.setAttribute("onclick", `${x+i}()`)
  buttonArray.push(createdButton);
}

//Each buttonArray's inner HTML equalized to each reducedCategory item
for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].innerHTML = reducedCategory[i]
}


const sectionCenter = document.querySelector(".section-center");

for (let i = 0; i < menu.length; i++) {
  let sectionDiv = document.createElement("div");
  let imageDiv = document.createElement("img");
  let title = document.createElement("h4");
  let prices = document.createElement("h4");
  let descInfo = document.createElement("p");
  let sectionDiv2 = document.createElement("div");
  let sectionDiv3 = document.createElement("div");

  sectionDiv.appendChild(imageDiv);
  sectionDiv.appendChild(sectionDiv2);
  sectionDiv3.appendChild(title);
  sectionDiv3.appendChild(prices);
  sectionDiv2.appendChild(sectionDiv3);
  sectionDiv2.appendChild(descInfo);
  sectionCenter.appendChild(sectionDiv);

  imageDiv.src = images[i];
  title.innerHTML = `${titles[i]}`;
  prices.innerHTML = `${price[i]}`;
  descInfo.innerHTML = desc[i];

  sectionDiv.setAttribute("class", "menu-items col-6");
  sectionDiv2.setAttribute("class", "col-7")
  imageDiv.setAttribute("class", "photo");
  sectionDiv3.setAttribute("class", "menu-title menu-info")
  descInfo.setAttribute("class", "menu-text menu-info");

}


// Since earlier sectionDiv created in a for iteration, it was to be reached globaly
let sectionDiv = document.querySelectorAll(".menu-items");



// All functions 
function clickFunction0() {
  for (let i=0; i<sectionDiv.length; i++){
    if (menu[i].category != reducedCategory[0]) {
      sectionDiv[i].classList.add("menu-items", "col-6", "hidden")
      }
      else {
        sectionDiv[i].classList.remove("hidden")
      }
  }
}

function clickFunction1() {
  for (let i=0; i<sectionDiv.length; i++){
    if (menu[i].category != reducedCategory[1]) {
      sectionDiv[i].classList.add("menu-items", "col-6", "hidden")
      }
      else {
        sectionDiv[i].classList.remove("hidden")
      }
  }
}

function clickFunction2() {
  for (let i=0; i<sectionDiv.length; i++){
    if (menu[i].category != reducedCategory[2]) {
      sectionDiv[i].classList.add("menu-items", "col-6", "hidden")
      }
      else {
        sectionDiv[i].classList.remove("hidden")
      }
  }
}

function clickFunction3() {
  for (let i=0; i<sectionDiv.length; i++){
    if (menu[i].category != reducedCategory[3]) {
      sectionDiv[i].classList.add("menu-items", "col-6", "hidden")
      }
      else {
        sectionDiv[i].classList.remove("hidden")
      }
  }
}

