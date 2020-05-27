var tl = gsap.timeline ({defaults:{opacity:0, ease:"back"}});
    
function init () {
    tl.from(".globe", {ease:"linear", autoAlpha:0, duration:0.5})
    tl.from(".subtitle", {x:80, duration:1}, "<")
    tl.from(".body", {x:-80}, "-=0.2")
    tl.from(".lead", {y:30, opacity:0}, "-=0.4")
}

window.addEventListener("load", function(event){
    init();
});