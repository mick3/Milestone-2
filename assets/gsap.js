var tl = gsap.timeline ();
    tl.from(".globe", {opacity:0})
    tl.from(".subtitle", {x: 80, opacity:0})
    tl.from(".body", {x:-80, opacity:0})
    tl.from(".lead", {y:30, opacity:0})