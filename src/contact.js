const contactLoad = () => {
    const pageContent = document.querySelector(".page-content");

    const contactContent = document.createElement("div");
    contactContent.className = "contact-content";

    const form = document.createElement("form");

    const formName = document.createElement("input");
    formName.setAttribute("type", "text");
    formName.setAttribute("placeholder", "Your name");

    const formEmail = document.createElement("input");
    formEmail.setAttribute("type","email");
    formEmail.setAttribute("required","");
    formEmail.setAttribute("placeholder", "Your email");

    const formText = document.createElement("input");
    formText.setAttribute("type","text");
    formText.setAttribute("placeholder", "What do you want to know?");
    formText.style.height = 200;

    const btnSubmit = document.createElement("button");
    btnSubmit.innerText = "Submit";
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.addEventListener("click", () =>{
        clearContent();
        contactLoad();
    });
    pageContent.appendChild(contactContent);
    contactContent.appendChild(form);
    form.appendChild(formName);
    form.appendChild(formEmail);
    form.appendChild(formText);
    form.appendChild(btnSubmit);

    function clearContent() {
        let contentAll = pageContent.querySelectorAll("div");
        contentAll.forEach((div) => div.remove());
    }
}

export {contactLoad};