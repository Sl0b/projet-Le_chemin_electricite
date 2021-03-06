//fonction detectant l'url et la rechargeant quand
//elle n'est pas 'propre'
window.onload =  function() {
    var str = self.location.href;
    if ((str[str.length - 1]) != '?') {
        window.location.href = 'index.html?';
    }
};

$(document).ready(function() {
    
    
    //mega fonction pour toutes les animations
    //hors fullpage
    function moveThings(slide) {
        switch(slide) {
            case 1:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%',
                    left: '100%'
                }, 700);
                $('.sun').animate({
                    top: '-10%',
                    left: '2%'
                }, 700);
                break;

            case 2:
                $('.cloud-one').animate({
                    left: '40%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    top: '19%',
                    left: '100%'
                }, speed);
                $('.sun').animate({
                    top: '15%',
                    left: '2%'
                }, 700);
                if (car == 1) {
                    car = 2;
                    $('.car1').animate({
                        left: '110%'
                    }, 20000);
                }
                break;

            case 3:
                $('.cloud-one').animate({
                    left: '30%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '90%',
                    top: '19%'
                }, speed);
                $('.sun').animate({
                    left: '-10%'
                }, speed);
                setTimeout(function() {
                    $('.avion').animate({
                        left: '110%'
                    }, 20000);
                }, 1000);
                if (car == 2) {
                    car = 3;
                    //fonction anonyme animant la voiture
                    //après un certain delai
                    setTimeout(function() {
                        $('.car2').animate({
                            left: '110%'
                        }, 20000)}, 7500);
                }
                break;

            case 4:
                $('.cloud-one').animate({
                    left: '20%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '80%',
                    top: '19%'
                }, speed);
                $('.sun').animate({
                    left: '-10%'
                }, speed);
                $('.car3').animate({
                    left: '-10%'
                }, 0);
                setInterval(function() {
                    $('.parapente')
                }, 100);
                setInterval(function() {
                    $('.canne').transition({
                        rotate: '-40deg'
                    }, 2000);
                    $('.canne').transition({
                        rotate: '0'
                    }, 2000);
                }, 200);
                setInterval(function() {
                    $('.fish').animate({
                        left: '62vw'
                    }, 2500);
                    $('.fish').transition({
                        rotateY: '180deg'
                    }, 1000);
                    $('.fish').animate({
                        left: '55vw'
                    }, 2500);
                    $('.fish').transition({
                        rotateY: '0'
                    }, 1000);
                }, 100);
                setInterval(function() {
                    $('.parapente').animate({  
                        top: '19vh'
                    }, 3000);
                    $('.parapente').animate({  
                        top: '17vh'
                    }, 3000);
                }, 100);
                break;

            case 5:
                $('.cloud-one').animate({
                    left: '10%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '70%',
                    top: '19%'
                }, speed);
                $('.sun').animate({
                    left: '-10%'
                }, speed);
                if (car == 3) {
                    car = 4;
                    setTimeout(function() {
                        $('.car3').animate({
                            left: '80%'
                        }, 20000)}, 1000);
                }
            break;

            case 6:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%'
                }, 700);
                $('.sun').animate({
                    top: '-10%'
                }, 700);
                break;

            case 7:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%'
                }, 700);
                $('.sun').animate({
                    top: '-10%'
                }, 700);
                break;
        }
    }


    //variable permettant de rebuild fullpage au premier tour
    var firstTime = true;

    //paramétrage de fullpage et methodes associées
    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath', 'video'],
        loopHorizontal: false,
        animateAnchor: false,

        //lancement de fonctions apres le load de
        //certaines sections
        afterLoad: function(anchorLink, index){
            //stock la section actuelle
            var loadedSection = $(this);

            //quand on arrive dans la premiere section
            //pour la premiere fois
            if(anchorLink == 'mainPath' && firstTime == true) {
                //rebuild pour enlever la barre blanche
                $.fn.fullpage.reBuild();
                //lance le modal de bienvenue
                firstTime = false;
            }
        },
        //lancement de fonctions apres le load de
        //certains slides
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            //stock le slide actuel
            var loadedSlide = $(this);

            //quand on est dans la deuxième section et 
            //sur le deuxieme slide
            if(anchorLink == 'mainPath' && slideIndex == 1){
                //apparition du sol progressive
                $(".upanim").css('animation', 'upanim 2s ease');
                $(".upanim").css('opacity', '1');
            }
        },
        
        //fonction permettant de voir quel slide nous
        //sommes dans le menu
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            var menuID = ["#ensemble", "#production", "#transport", "#distribution", "#fourniture", "#roleerdf", "#slide-video"];
            $(menuID[nextSlideIndex]).toggleClass('bgcblue');
            $(menuID[slideIndex]).toggleClass('bgcblue');
            console.log(nextSlideIndex);
            moveThings(nextSlideIndex + 1);
        }
    });

    //stockage du slide actuel
    var slide = 1;

    //fonctions animant les eoliennes
    function rotor() {
        $('.rotor').transition({ rotate: '60000000deg' }, 6000000000, 'linear');
    };

    //lance l'animation des éoliennes
    rotor();

    //variable definissant la vitesse d'animation
    var speed = 800;

    //variable controlant la voiture
    var car = 1;

    moveThings(1);

    //animations hover boing boing
    $('.animShake').hover(function() {
        $(this).addClass('animated shake');
    }, function() {
        $(this).removeClass('animated shake');
    });

    $('.animPulse').hover(function() {
        $(this).addClass('animated pulse');
    }, function() {
        $(this).removeClass('animated pulse');
    });

    $('.animBounce').hover(function() {
        $(this).addClass('animated bounce');
    }, function() {
        $(this).removeClass('animated bounce');
    });
    
    //animation fleche close modal
    $('.square').hover(function() {
        $(this).stop();
        $(this).transition({ rotate: '360deg' }, 300, 'ease');
    }, function() {
        $(this).stop();
        $(this).transition({ rotate: '0deg' }, 300, 'ease');
    });
    
    //effet hover pour faire aparaitre les clips question
    $('.ask').hover(function() {
        $(this.children).stop();
        $(this.children).animate({
            opacity: '1'
        }, 300)
    }, function() {
        $(this.children).stop();
        $(this.children).animate({
            opacity: '0'
        }, 300)
    });
    
});