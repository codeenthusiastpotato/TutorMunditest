const starChosen = document.querySelectorAll('.stars');
const stars = document.querySelectorAll('.stars a');

stars.forEach((star,clickedIdx) => {
    star.addEventListener('click', () => { 
        starChosen.classList.add('disabled');
        stars.forEach((outrasEstrelas, otherIdx) =>{ 
            if (otherIdx <= clickedIdx) {
                outrasEstrelas.classList.add("active");
            }
        })
        
        console.log("A estrela $(idx) foi clicada");
    })

    
})