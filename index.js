let acc = document.getElementsByClassName("accordion__heading");
    let i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.closest('.accordion__item').classList.toggle("active");
            let accBody = this.closest('.accordion__item').querySelector('.accordion__body');
            if (this.closest('.accordion__item').classList.contains("active")) {
                accBody.style.height = accBody.querySelector('.accordion__info').offsetHeight + 10 + "px"
            } else {
                accBody.style.height = '0'
            }
        });
    }
