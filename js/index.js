
let vm = new Vue({
    el: "#wrap",
    data() {
        return {
            flag:true,
            flagShow: false,
            
        }
    },
    methods: {
        handleClose: function(){
            this.flag= !this.flag;  
                             
        },
        toTop: function() {
            if(document.documentElement.scrollTop>0){
                document.documentElement.scrollTop=0;
            }
        },
        handleShow: function() {
            this.flagShow = !this.flagShow;
        },
        handleUp: function (){
            this.flagShow = !this.flagShow;
        }
        
    },




});

let swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})   
