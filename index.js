let acc = document.getElementsByClassName("accordion__heading");
    let i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.closest('.accordion__item').classList.toggle("active");
            let accBody = this.closest('.accordion__item').querySelector('.accordion__body');
            if (this.closest('.accordion__item').classList.contains("active")) {
                if (this.closest('.menu-mob')){
                    accBody.style.height = accBody.querySelector('.accordion__info').offsetHeight + 20 + "px";
                    this.closest('.menu-mob').style.height = 'auto'
                }else{
                    accBody.style.height = accBody.querySelector('.accordion__info').offsetHeight + 30 + "px"
                }
            } else {
                accBody.style.height = '0'
            }
        });
    }
