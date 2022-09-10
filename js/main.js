let Nav_Bar_header = document.querySelector(".full-width");
let log_img = document.querySelector(".img-src");
let video_Btn = document.querySelector(".video_btn");
let counter_slide = document.querySelector(".counter_slide");

let toggle_btn = document.querySelector(".toggle_btn");
let links = document.querySelector(".links");
let links_A = document.querySelectorAll(".links li a");

let menu = document.querySelector(".menu");

// start function set class active onscroll on the links
function setActiveClass_onScroll() {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            links_A.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('.links li a[href*=' + id + ']')
                activeLink.classList.add('active')
            })
        }
    })
}
// end function set class active onscroll on the link
// start menu likes open
toggle_btn.addEventListener("click", (e) => {
        e.preventDefault();
        links.classList.toggle("menu");
        let li_menu = document.querySelectorAll(".menu li");
        li_menu.forEach(li => {
            li.addEventListener("click", (ev) => {
                links.classList.remove("menu");
            })
        })

    })
    // end menu likes open
// start nav bar scroll
window.onscroll = function() {
    let Dark_Logo = "images/log/logo-dark.png";
    let light_logo = "images/log/logo-light.png";
    let OfSetY = window.pageYOffset;
    if (OfSetY > 100) {
        Nav_Bar_header.classList.add("nav-scroll");
        log_img.src = Dark_Logo;
    } else {
        Nav_Bar_header.classList.remove("nav-scroll");
        log_img.src = light_logo;
    }
    counterSlide();
    skillAnimation();
    setActiveClass_onScroll();
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
let imgsrc = ["images/gallery/1.jpg","images/gallery/2.jpg","images/gallery/3.jpg","images/gallery/4.jpg","images/gallery/5.jpg","images/gallery/6.jpg","images/gallery/7.jpg"]

Images_Icons.forEach((Element) => {
    let number_Items = 1;
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

        

        
       
      
        CloseViewer();

    });
});

// function to make slider images





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