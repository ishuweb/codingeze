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
        console.log(document.documentElement.scrollTop);
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


    // =====================================================
    // ===== ANNIMATION DESKTOP AND SEMI DESKTOP ONLY ======
    // =====================================================

    if(screen.width >= 900) {
       
        // ANIMATION ON SCROLL FUNCTION RUN AFTER PAGE LOADED 
        // SECTION 3
        scrolanimate("#sec_3_txt_1_contr", "padding-top", "50px", "4250");
        scrolanimate("#sec_3_txt_2_contr", "margin-top", "80px", "4320");
        scrolanimate("#sec_3_txt_3_contr", "margin-top", "40px", "4420");
        scrolanimate("#sec_3_img_contr", "transform", "scale(100%)", "4420");

        // SECTION 4
        scrolanimate("#sec_4_txt_1_contr", "padding-top", "120px", "4820");
        scrolanimate(".sec_4_smbox_eachbox", "transform", "scale(100%)", "4820");
    }
    // ANIMATION FOR MOBILE ONLY 
    else if(screen.width <= 600) {
       
    }
}


// ===================================================
// ========= HEADER ANIMATION LEFT SCROLLER ==========
// ===================================================

function header_scroler_anim() {
    setInterval(()=>{
        var mt_height = $(".headbox_scrol_wraper").css("margin-top");
        if(mt_height == "0px") {
            $(".headbox_scrol_wraper").css("margin-top","-400px");
        }
        else if(mt_height == "-400px") {
            $(".headbox_scrol_wraper").css("margin-top","-800px");
        }
        else if(mt_height == "-800px") {
            $(".headbox_scrol_wraper").css("margin-top","-1200px");
        }
        else if(mt_height == "-1200px") {
            $(".headbox_scrol_wraper").css("margin-top","-1600px");
        }
        else if(mt_height == "-1600px") {
            $(".headbox_scrol_wraper").css("margin-top","-2000px");
        }
        else if(mt_height == "-2000px") {
            $(".headbox_scrol_wraper").css("margin-top","-2400px");
        }
        else if(mt_height == "-2400px") {
            $(".headbox_scrol_wraper").css("margin-top","-2800px");
        }
        else if(mt_height == "-2800px") {
            $(".headbox_scrol_wraper").css("margin-top","-3200px");
        }
        else if(mt_height == "-3200px") {
            $(".headbox_scrol_wraper").css("margin-top","-3600px");
        }
        else if(mt_height == "-3600px") {
            $(".headbox_scrol_wraper").css("margin-top","-4000px");
        }
        else if(mt_height == "-4000px") {
            $(".headbox_scrol_wraper").css("margin-top","0px");
        }
    },4000)
}
setTimeout(()=>{
    header_scroler_anim();
},2000)
