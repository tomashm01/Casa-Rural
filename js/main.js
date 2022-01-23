{
    document.addEventListener("DOMContentLoaded", function() {

        const body=document.getElementsByTagName("body")[0];

        //Cambiar el fondo cada 5 segundos
        setInterval(function(){
            const rand=Math.floor(Math.random()*4)+1;
            body.style.backgroundImage="url('./img/fondo"+rand+".jpg')";
        },5000);

    });
}