// header
// pathname pages
const navLinks = {
  "/features.html": 0,
  "/compare.html": 1,
  "/support.html": 2,
  "/blog.html": 3,
};
const currentPath = location.pathname; // active page
// In active page add active class in special li him
if (navLinks[currentPath] !== undefined) {
  document
    .querySelectorAll(".navbar-nav li a")
    [navLinks[currentPath]].classList.add("active");
}
// position header is sticky when scroll up
let header = document.querySelector("nav.navbar"); // header
let lastScrollY = window.scrollY; // last scrollY

window.addEventListener("scroll", () => {
  let currentScroolY = window.scrollY;
  //  scrollY > header height
  if (currentScroolY > header.offsetHeight && currentScroolY < lastScrollY) {
    // when scrollY up

    header.style.cssText = "position: fixed; width:100%;";
  } else {
    //when scrollY down
    header.style.cssText = "position: relative;";
  }
  lastScrollY = currentScroolY; // Update the previous scroll position
});
// dropdown compare and blog
let dropdowns = document.querySelectorAll(".drop-down");
let dropdownIcons = document.querySelectorAll(".dropdown-icon");

dropdownIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    if (index == 0 && !dropdowns[1].classList.contains("not-visable")) {
      dropdowns[1].classList.add("not-visable");
    } else if (index == 1 && !dropdowns[0].classList.contains("not-visable")) {
      dropdowns[0].classList.add("not-visable");
    }
    dropdowns[index].classList.toggle("not-visable");
  });
});
// ##############################################################################
// questions
let questions = document.querySelectorAll(".questions .question");
questions.forEach((question) => {
  question.firstElementChild.lastElementChild.addEventListener("click", () => {
    question.firstElementChild.lastElementChild.firstElementChild.classList.toggle(
      "r-45"
    );

    question.lastElementChild.classList.toggle("not-visable");
  });
});

// ##############################################################################
/* ==> blog <== */
// keys
let keys = document.querySelectorAll(".blog .blog-links ul li");
// cards
let cards = document.querySelectorAll(".blog .blog-cards .blog-card");
// filter
keys.forEach((li) => {
  // enter click key
  li.addEventListener("click", () => {
    keys.forEach((ele) => {
      ele.classList.remove("active-key");
    });
    li.classList.add("active-key");
    let searchKey = li.innerHTML;
    cards.forEach((card) => {
      // remove d-none class from all cards
      card.classList.remove("d-none");
      let keysBlog = card.dataset.blog;
      // add d-none class from not cards include key
      if (!keysBlog.includes(searchKey)) {
        card.classList.add("d-none");
      }
    });
  });
});
// ##############################################################################
/* ==> support <== */
// categories (cards, account and personal details) change a color to arrive to section
if (location.pathname == "/support.html") {
  let faq = document.querySelectorAll(".faq .section");
  let faqLinks = document.querySelectorAll(".faq-categorie a");
  window.onscroll = () => {
    faq.forEach((ele, index) => {
      if (
        window.scrollY > ele.offsetTop - 10 &&
        window.scrollY < ele.offsetHeight + ele.offsetTop
      ) {
        faqLinks.forEach((link) => {
          link.style.color = "rgba(26, 25, 30, 0.5)";
        });
        faqLinks[index].style.color = "rgb(91, 181, 162)";
      } else {
      }
    });
  };
}
// ##############################################################################
/* ==> fontpage <== */
if (location.pathname == "/Frontpage.html") {
  // add card fontpage
  let addCard = document.querySelector(".Card-add");
  addCard.addEventListener("click", () => {
    //  create pop
    let msg = document.createElement("div");
    msg.classList.add("Msg");

    let inputs = document.createElement("div");
    inputs.classList.add("msg-inputs");

    let img = document.createElement("input");
    img.type = "file";
    img.id = "add-img";
    let imgLabel = document.createElement("label");
    imgLabel.textContent = "Upload";
    imgLabel.htmlFor = "add-img";
    img.placeholder = "";

    let name = document.createElement("input");
    name.type = "text";
    name.id = "add-name";
    name.placeholder = "New Laptop";
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    nameLabel.htmlFor = "add-name";

    let price = document.createElement("input");
    price.type = "text";
    price.id = "add-price";
    price.placeholder = "400$";
    let priceLabel = document.createElement("label");
    priceLabel.textContent = "Price";
    priceLabel.htmlFor = "add-price";

    inputs.appendChild(imgLabel);
    inputs.appendChild(img);
    inputs.appendChild(nameLabel);
    inputs.appendChild(name);
    inputs.appendChild(priceLabel);
    inputs.appendChild(price);

    let btns = document.createElement("div");
    btns.classList.add("msg-btns");

    let cancel = document.createElement("button");
    cancel.innerHTML = "cancel";
    // cancel add
    cancel.addEventListener("click", () => {
      msg.remove();
    });
    let done = document.createElement("button");
    done.innerHTML = "done";
    // complete add
    done.addEventListener("click", () => {
      let card = document.createElement("div");
      card.className = "Card col-6 col-md-3 col-lg";

      let img = document.createElement("img");
      img.alt = "Not found";
      img.src = `images/${document.getElementById("add-img").files[0].name}`;
      img.className = "w-100";
      card.appendChild(img);

      let h5 = document.createElement("h5");
      h5.className = "text-capitalize pt-4";
      h5.innerHTML = document.getElementById("add-name").value;
      card.appendChild(h5);

      let p = document.createElement("p");
      p.className = "text-black-50";
      p.innerHTML = document.getElementById("add-price").value;
      card.appendChild(p);

      addCard.before(card);

      msg.remove();
    });

    btns.appendChild(cancel);
    btns.appendChild(done);

    msg.appendChild(inputs);
    msg.appendChild(btns);
    document.body.appendChild(msg);
  });
}

// function createSavingCard(URL,name,price) {
//   let card = document.createElement("div");
//   card.className = "Card col-6 col-md-3 col-lg";

//   let img = document.createElement("img");
//   img.alt = "Not found";
//   img.src = `images/${URL}`;
//   img.className = "w-100";
//   card.appendChild(img);

//   let h5 = document.createElement("h5");
//   h5.className = "text-capitalize pt-4";
//   h5.innerHTML = name;
//   card.appendChild(h5);

//   let p = document.createElement("p");
//   p.className = "text-black-50";
//   p.innerHTML = price;
//   card.appendChild(p);

//   addCard.before(card);
// }
// let urlCard = document.getElementById("add-img").files[0].name
// let nameCard = document.getElementById("add-name").value
// let priceCard = document.getElementById("add-price").value

// createSavingCard(urlCard,nameCard,priceCard)
