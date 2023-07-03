let btn = document.querySelector(".button-remover")
let audio = document.getElementById('audio')
let index = 1
let ano = new Date().getFullYear()



let remainingTime = 147; // 2 minutos e 27 segundos
    let timerElement = document.getElementById("timer");

    function startTimer() {
        btn.disabled=true
        btn.innerHTML=` Processo iniciado... <br> removendo água do dispositivo`
        document.querySelector(".popup").classList.add('ativo')
        document.querySelector(".time").style.display="flex"
        document.querySelector('.button-remover').style.width="max-content"
        document.querySelector('.button-remover').style.height="max-content"
        document.querySelector('.button-remover').style.backgroundColor=" rgb(7, 115, 158)"
      

      

        document.querySelector('.button-remover').style.borderRadius="4px"
        document.querySelector('.button-remover').style.padding="4px"
      updateTimer();
    }

    setInterval(()=>{
        index++
        if(index>10){
            index=1
        }
        document.querySelector('.depoimentos').innerHTML=`<img src="depoimentos/0${index}.png" alt="">`
    },3000)

    function updateTimer() {
        audio.play()

        setTimeout(()=>{
            document.querySelector('.popup').style.display="none"
        },4000)

      let minutes = Math.floor(remainingTime / 60);
      let seconds = remainingTime % 60;

      // Formata os minutos e segundos com dois dígitos
      let formattedTime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
      timerElement.innerHTML = formattedTime;

      if (remainingTime > 0) {
        remainingTime--;
        setTimeout(updateTimer, 1000); // Atualiza a cada 1 segundo
        if(minutes===0 && seconds===0){
        }
      } else {
        timerElement.innerHTML = "Àgua Removida com sucesso!";
        
        setTimeout(()=>{
            window.location.href="http://removeragua.com/"
        },3000)
      }
    }

   

btn.addEventListener("click", startTimer)

document.querySelector(".fechar").addEventListener("click", ()=>{
    document.querySelector(".popup").classList.remove('ativo')
})

document.querySelector("footer p").innerHTML=`Copyright ${ano} Todos os direitos reservados!`