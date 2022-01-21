{
    document.addEventListener('DOMContentLoaded', function() {

        //Comportamiento parrafos
        let parrafos=document.getElementsByTagName('p');
        for(let i=0;i<parrafos.length;i++){
            parrafos[i].classList.add('ocultar');
        }
        let contador=0;
        setInterval(comportamientoFrases,3000);

        function comportamientoFrases(){
            parrafos[contador].classList.remove('ocultar');
            parrafos[contador].classList.add('mostrar');
            parrafos[contador].classList.add('aumentar');

            for(let i=0;i<parrafos.length;i++){
                if(i!=contador){
                    parrafos[i].classList.remove('mostrar');
                    parrafos[i].classList.add('ocultar');
                }
            }
            contador++;
            if(contador==parrafos.length){
                contador=0;
            }
        }

    });
}