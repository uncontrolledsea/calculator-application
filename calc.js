let string = "";
let btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.innerText === "=") {
            string = eval(string);
            document.querySelector(".ip").value = string;

        }
        else if (button.innerText === "AC") {
            string = "";
            document.querySelector(".ip").value = string;

        }

        else {


            console.log(button.innerText);
            string = string + button.innerText;
            document.querySelector(".ip").value = string;
        }

    })
})