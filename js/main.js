let nav_bar = document.querySelector(".full-width");
let log_img = document.querySelector(".img-src");
let video_Btn = document.querySelector(".video_btn");
let counter_slide = document.querySelector(".counter_slide");






// start nav bar scroll
window.onscroll = function() {
    let Dark_Logo = "../images/log/logo-dark.png";
    let light_logo = "../images/log/logo-light.png";
    let OfSetY = window.pageYOffset;
    if (OfSetY > 100) {
        nav_bar.classList.add("nav-scroll");
        log_img.src = Dark_Logo;
    } else {
        nav_bar.classList.remove("nav-scroll");
        log_img.src = light_logo;
    }
    counterSlide();
    skillAnimation();
};

// end nav bar scroll
// start scroll skills section
let skills = document.querySelector(".skills");


function skillAnimation() {
    let offsetY = skills.offsetTop; //the destines between screen and element form top
    let outerHight = skills.offsetHeight; // only height element 
    let screenHeight = this.innerHeight; // only screen destines
    let windowScrollTop = window.pageYOffset; //how much scroll
    if (windowScrollTop > (offsetY + outerHight - screenHeight)) {
        let value_progress = document.querySelectorAll(".value-progress");
        value_progress.forEach(span => {
            span.style.width = span.dataset.progress;
        })

    }
}
// end scroll skills section
// start Video screen
video_Btn.addEventListener("click", (e) => {
    e.preventDefault();
    let video_container = document.createElement("div");
    video_container.setAttribute("class", "video_container");
    document.body.appendChild(video_container);
    let View_Screen = document.createElement("div");
    View_Screen.setAttribute("class", "view-screen");
    video_container.appendChild(View_Screen);
    let Video_content = document.createElement("iframe");
    Video_content.setAttribute("class", "iframe-content");
    Video_content.src = "https://player.vimeo.com/video/127203262?autoplay=1";
    View_Screen.appendChild(Video_content);
    CloseVideoScreen();
});
//   Close Video Screen
function CloseVideoScreen() {
    document.body.onclick = (e) => {
        if (
            e.target.classList.contains("video_container") ||
            e.target.classList.contains("view-screen")
        ) {
            document.body.querySelector(".video_container").remove();
        }
    };
}
// end  Video Screen

// start filter items
let Li_item_Link = document.querySelectorAll(".item-content");
let Items_gallery = document.querySelectorAll(".item");
Li_item_Link.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        Li_item_Link.forEach((li) => {
            li.classList.remove("active");
        });
        let DataContent = ele.dataset.content;
        Items_gallery.forEach((item) => {
            item.classList.remove("active");
            if (DataContent == item.dataset.product) {
                item.classList.add("active");
            } else if (DataContent == "*") {
                Items_gallery.forEach((pro) => {
                    pro.classList.add("active");
                });
            }
        });
        e.target.classList.add("active");
    });
});

// end filter items

// start images gallery
let Images_Icons = document.querySelectorAll(".icon-img");
let currentSlider = 1;
Images_Icons.forEach((Element) => {
    Element.addEventListener("click", (e) => {
        let Img_slider_container = document.createElement("div");
        Img_slider_container.setAttribute("class", " Img_slider_container");
        document.body.appendChild(Img_slider_container);
        let content_slider = document.createElement("div");
        content_slider.setAttribute("class", "content_slider");
        Img_slider_container.appendChild(content_slider);
        let viewer = document.createElement("div");
        viewer.setAttribute("class", "viewer");
        content_slider.appendChild(viewer);
        let Btn_left = document.createElement("span");
        Btn_left.setAttribute("class", "left");
        viewer.appendChild(Btn_left);
        let content_img = document.createElement("img");
        content_img.setAttribute("class", "img-content");
        viewer.appendChild(content_img);

        content_img.src = e.target.src;
        let Btn_right = document.createElement("span");
        Btn_right.setAttribute("class", "right");
        viewer.appendChild(Btn_right);

        // Btn_left.addEventListener("click", () => {
        //     currentSlider--;
        //     SliderImage(content_img.src, Btn_right, Btn_left)
        // })
        // Btn_right.addEventListener("click", () => {
        //     currentSlider--;
        //     SliderImage(content_img.src, Btn_right, Btn_left)
        // })
        CloseViewer();

    });
});
// SliderImage()
// function to make slider images
// function SliderImage(putOn, next, back) {
//     let imagesSlider = document.querySelectorAll(".item-img img");
//     console.log(imagesSlider)
//     place = SliderImage[currentSlider - 1].src;
//     if (currentSlider == imagesSlider) {
//         next.classList.remove("disable")
//     } else {
//         next.classList.add("disable")
//     }
//     if (currentSlider == 1) {
//         back.classList.add("disable")
//     } else {
//         back.classList.remove("disable")
//     }
// }


function CloseViewer() {
    document.body.onclick = (e) => {
        if (
            e.target.classList.contains("Img_slider_container") ||
            e.target.classList.contains("content_slider")
        ) {
            document.body.querySelector(".Img_slider_container").remove();
        }
    };
}
// end images gallery

// start counter slider
let Counter_Number = document.querySelectorAll(".number-counter");
Counter_Number.forEach((number) => {
    let Number_Data = number.dataset.counter;
    let Counter_Start = 0;
    let Counter_Interval = setInterval(() => {
        if (Counter_Start == Number_Data) {
            clearInterval(Counter_Interval);
        } else {
            number.innerHTML = Counter_Start++;
        }
    }, 0.1);
});
// end counter slider

// start team counter/////////////////////////////////////


function counterSlide() {
    if (window.scrollY <= 3200) {
        counter_slide.style.display = "flex";
    }
}
// end team counter/////


////////////////////////////////
// start Add & remove class active
let Btn_contents = document.querySelectorAll(".Btn-content ");
Btn_contents.forEach((Btn) => {
    Btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentElement.querySelectorAll(".active").forEach((b) => {
            b.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
// end Add & remove class active



// start team banner
let members = document.querySelectorAll(".member");
let Team_member_inf = document.querySelectorAll(".Team_member_inf");
let banner_team_container = document.querySelector(".banner_team_container");

members.forEach((mem) => {
    mem.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
        let dataSetTeam = e.target.dataset.team;
        Team_member_inf.forEach((perso) => {
            let dataSet_member = perso.dataset.member;
            if (dataSet_member == dataSetTeam) {
                Team_member_inf.forEach((br) => {
                    br.classList.remove("active");
                });
                perso.classList.add("active");
            }
        });
    });
});
// end team banner