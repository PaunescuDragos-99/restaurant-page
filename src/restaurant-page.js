import { menuLoad } from "./menu";
import { homeLoad } from "./home";
import { contactLoad } from "./contact";
import './restaurant-page.css';

const pageLoad = (() => {
    const content = document.querySelector("#content");
    const headLine = document.createElement("div");
    const pageContent = document.createElement("div");
    pageContent.className = "page-content";

headLine.classList.add('navbar');

    for (let i = 0 ; i < "3" ; i++){
        const paragraph = document.createElement("p");
        if(i == 0){
            paragraph.innerText = `Home`;
        }else if(i == 1){
            paragraph.innerText = `Menu`;
        }else {
            paragraph.innerText = `Contact`;
        }
        paragraph.addEventListener("click" , () => {
            if(i == 0){
                clearContent();
                changeTab();
                paragraph.classList.add("current");
                homeLoad();
            }else if(i == 1){
                clearContent();
                changeTab();
                paragraph.classList.add("current");
                menuLoad();
            }else if(i == 2){
                clearContent();
                changeTab();
                paragraph.classList.add("current");
                contactLoad();
            }
        });
        headLine.appendChild(paragraph);
    }

    function changeTab (){
        const p = document.querySelectorAll('p');
        p.forEach(tab => tab.classList.remove('current'));
    }

    function clearContent() {
        let contentAll = pageContent.querySelectorAll("div");
        contentAll.forEach((div) => div.remove());
    }
    content.appendChild(headLine);
    content.appendChild(pageContent);
    menuLoad();  
});

export {pageLoad};