let inp = document.querySelector("input");
let btns = document.querySelectorAll("button");
let string = "";
const operators = ['+', '-', '*', '/', '%']
let arr = Array.from(btns);
arr.forEach(button =>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            inp.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            inp.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inp.value = string;
        }
        else if(operators.includes(e.target.innerHTML)){
            if(string === ""){
                return;
            }
            let lastChar = string.slice(-1);
            if(operators.includes(lastChar)){
                string = string.slice(0, -1) + e.target.innerHTML;
            }else{
                string += e.target.innerHTML;
            }
            inp.value = string;
        }
        else{
             string += e.target.innerHTML;
             inp.value = string;
        }
       
    })
})


