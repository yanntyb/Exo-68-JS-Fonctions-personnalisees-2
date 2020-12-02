let para = document.getElementsByTagName("p");

function nbrandom(max){
    return Math.ceil(Math.random() * max);
}

function modifPara(para,text){
    para.innerHTML = text;
}

for(let i of para){
    modifPara(i,nbrandom(100));

}