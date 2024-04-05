const rightArrow = document.querySelector(".arrows .right-arrow i");
const leftArrow = document.querySelector(".arrows .left-arrow i")
const tabList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(".arrows .left-arrow");
const rightArrowContainer = document.querySelector(".arrows .right-arrow")


rightArrow.addEventListener("click", () => {
    tabList.scrollLeft += 200;
})

leftArrow.addEventListener("click", ()=> {
    tabList.scrollLeft +=200;
})



