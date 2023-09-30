        //icons 
        const sunicon = document.querySelector(".sun");
        const moonicon = document.querySelector(".moon");

        //Them vars
        const usertheme = localStorage.getItem("theme");
        const systemtheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        //toggle icon

        const icontoggle=()=>{
          moonicon.classList.toggle("display-none");
          sunicon.classList.toggle("display-none");
        };

        // inital theme check 

        const themecheck = ()=>{
          if(usertheme==="dark" || (!usertheme && systemtheme)){
            document.documentElement.classList.add("dark");
            moonicon.classList.add("display-none");
            return;
          }
          sunicon.classList.add("display-none");
        };
        
        //manual switch
        
        const themeswitch = ()=>{
          if(document.documentElement.classList.contains("dark")){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            icontoggle();
            return;
          }
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme","dark");
          icontoggle();
        };

        //now implementing switch

        sunicon.addEventListener("click",()=>{
          themeswitch();
        });

        moonicon.addEventListener("click",()=>{
          themeswitch();
        });

        
        themecheck();
        
        
        // //javascript for navigation bar effects on scroll
        window.addEventListener("scroll", function(){
          const header = document.querySelector("header");
          header.classList.toggle('sticky', window.scrollY > 0);
        });
        
        //javascript for responsive navigation sidebar menu
        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");
        const navigationItems = document.querySelectorAll(".navigation a")
        
        menuBtn.addEventListener("click",  () => {
          menuBtn.classList.toggle("active");
          navigation.classList.toggle("active");
        });
        
        navigationItems.forEach((navigationItem) => {
          navigationItem.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
          });
        });
        
        //javascript for scroll to top button
        const scrollBtn = document.querySelector(".scrollToTop-btn");
        
        window.addEventListener("scroll", function(){
          scrollBtn.classList.toggle("active", window.scrollY > 500);
        });
        
        //javascript for scroll back to top on click scroll-to-top button
        scrollBtn.addEventListener("click", () => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
        
        //javascript for reveal website elements on scroll
        window.addEventListener("scroll", reveal);
        
        function reveal(){
          var reveals = document.querySelectorAll(".reveal");
        
          for(var i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 50;
        
            if(revealTop < windowHeight - revealPoint){
              reveals[i].classList.add("active");
            }
          }
        }
              