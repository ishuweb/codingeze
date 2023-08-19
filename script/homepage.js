console.log("CodeEZE");

// ==========================================
// ======= COMMON ANIMATION FUNCTION ========
// ==========================================

function scrolanimate(identifier, style_action, style_val, scroller) {
    window.addEventListener('scroll', () => {
        // SECTION 3 
        if(document.documentElement.scrollTop >= scroller) {
            $(identifier).css(style_action, style_val);
        }
    })
}


// =================================================
// ======== LOADING AND ANIMATION SECTION ==========
// =================================================

function offloader() {
    $("#load-box").css("display","none");

    // HEADER BOX ANIMATION 
    setTimeout(()=>{
        $(".rotor_img").css("transform","scale(100%)");
    },100)
}