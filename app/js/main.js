$(document).ready(function () {
    AOS.init({
        once: true,
        offset: 0,
        easing: 'ease-in-out-cubic',
        duration: "300",
    });


    if ($(this).scrollTop() >= 42) {
        $(".header-nav").addClass("scrolled");
    } else {
        $(".header-nav").removeClass("scrolled");
    }
    $(window).on("load", function () {
        if ($(this).scrollTop() >= 42) {
            $(".header-nav").addClass("scrolled");


        } else {
            $(".header-nav").removeClass("scrolled");

        }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $("#main").offset().top) {
            $(".back-top").addClass("active");

        } else {
            $(".back-top").removeClass("active");

        }
        if ($(this).scrollTop() >= 42) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");

        }
    });
    $(".back-top").on("click", function () {
        $(".back-top").removeClass("active");
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(".bs-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        centerPadding: '0',
        dots: false,
        fade: false,
        autoplay: false,
        infinite: true,
        draggable: true,
        swipeToSlide: false,
        touchMove: false,
        swipe: false,
        nextArrow: '.next__btn', 
        prevArrow: '.prev__btn',

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },{

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },


            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
// function onclick__btn(){
//     const a = document.querySelector("#name").value;
//     const b = document.querySelector("#organization").value;
//     const c = document.querySelector("#email").value;
//     const d = document.querySelector("#phone__number").value;
//     const e = document.querySelector("#content").value;
// }
var a = 0;
// const form__btn = document.querySelector("#form__btn");
// let data_show_field = field_list[j].getAttribute("data-show");
// let data_show_rotate = rotate_item[i].getAttribute("data-show");
let field_item = document.querySelector(".field-item");
let field_list = document.querySelector("#field-list").children;
let rotate_item = document.querySelector(".rotate-item").children;
let img_layer_run = document.querySelector("#layer-run__img");
const layer_item1 = document.querySelector(".layer-item1");
const layer_item2 =  document.querySelector(".layer-item2");
const layer_item3 =  document.querySelector(".layer-item3");
const layer_item4 =  document.querySelector(".layer-item4");
var j = 0;

let runInterval= setInterval(()=>{
    j++;
    if(j == 4){
       j = 0
    }
    // console.log("j: ",j);
    for(i=0;i<field_list.length;i++){
        if(i === j){
            field_list[i].classList.add("active");
            rotate_item[i].children[0].classList.add("show");

            switch(j){
                case 0:
                    rotate_item[0].classList.add("item1") & rotate_item[0].classList.remove("item2");
                    rotate_item[1].classList.add("item2") & rotate_item[1].classList.remove("item3");
                    rotate_item[2].classList.add("item3") & rotate_item[2].classList.remove("item4");
                    rotate_item[3].classList.add("item4") & rotate_item[3].classList.remove("item1");
                break;

                case 1:
                    rotate_item[0].classList.add("item4") & rotate_item[0].classList.remove("item1");
                    rotate_item[1].classList.add("item1") & rotate_item[1].classList.remove("item2");
                    rotate_item[2].classList.add("item2") & rotate_item[2].classList.remove("item3");
                    rotate_item[3].classList.add("item3") & rotate_item[3].classList.remove("item4");
                break;

                case 2:
                    rotate_item[0].classList.add("item3") & rotate_item[0].classList.remove("item4");
                    rotate_item[1].classList.add("item4") & rotate_item[1].classList.remove("item1");
                    rotate_item[2].classList.add("item1") & rotate_item[2].classList.remove("item2");
                    rotate_item[3].classList.add("item2") & rotate_item[3].classList.remove("item3");
                break;

                case 3:
                    rotate_item[0].classList.add("item2") & rotate_item[0].classList.remove("item3");
                    rotate_item[1].classList.add("item3") & rotate_item[1].classList.remove("item4");
                    rotate_item[2].classList.add("item4") & rotate_item[2].classList.remove("item1");
                    rotate_item[3].classList.add("item1") & rotate_item[3].classList.remove("item2");
                break;
            }
        }
        else{
            field_list[i].classList.remove("active");
            rotate_item[i].children[0].classList.remove("show");
        }
    }

},8000);




    $(".layer-run").hover(function(){
        const data_hover =  $(this).attr("data-show");
            field_list[data_hover-1].classList.add("show_item");
    },function(){
        const data_hover =  $(this).attr("data-show");
        field_list[data_hover-1].classList.remove("show_item");
    });
    
    
const canvas = document.querySelector("#myCanvas");
var context = module_latest.getContext('2d');
function drawBall(){
    /* clearRect là xóa hết phần đang có  */
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.rect(x,y,10,10);
    context.stroke();
    context.fillStyle = 'red';
    context.fill();
    context.clearPath();
}

setInterval(()=>{
    drawBall();
    x +=20;
    y +=20;
},200)