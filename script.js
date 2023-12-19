window.addEventListener("load", ()=>{

    //cały ten kod służy tylko i wyłącznie temu, żeby obrazki były różne
    let imageArray = Array.from(document.getElementsByTagName("img"));
    imageArray.forEach((img)=>{
        img.src += "?random=" + Math.round(Math.random()*1000000);
    });

    //pasek z produktami
    let productList = document.getElementById("productList");
    //lewa strzałka
    let leftArrow = document.getElementById("leftArrow");
    //prawa strzałka
    let rightArrow = document.getElementById("rightArrow");
    //dodajemy obsługe do lewej strzałki
    leftArrow.addEventListener("click", ()=>{
        //odczytaj obecne przesunięcie listy produktów
        let currentPosition = parseInt(productList.style.left);
        if(currentPosition <= -1400) {
            //koniec produktów - wróć na początek
            currentPosition = 0;
        } else {
            //przesuń w lewo - odejmij 200
            currentPosition -= 200;
        }
        
        //zmodyfikuj css
        productList.style.left = currentPosition + "px";
    })
    rightArrow.addEventListener("click", ()=>{
        let currentPosition = parseInt(productList.style.left);
        if(currentPosition >=0) {
            //początek produktów - przewiń na koniec
            currentPosition = -1400;
        } else {
            //przesuń w prawo - dodaj 200
            currentPosition += 200;
        }
        
        //zmodyfikuj css
        productList.style.left = currentPosition + "px";
    })


    //klikalne karty produktów 
    
})