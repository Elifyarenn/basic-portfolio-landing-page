const filterBtns = document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".project-card") 
filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        filterBtns.forEach(b=> b.classList.remove('active'));
        this.classList.add('active');
        cards.forEach(card =>{
        if (this.dataset.filter==='all'){
            card.style.display="flex"
        }else{
            if(card.dataset.tags.includes(this.dataset.filter)){
                card.style.display="flex"
            }else{
                card.style.display="none"
            }
        }
        })   
    });
});