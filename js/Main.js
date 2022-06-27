let row = document.getElementById("rowData");
let allMoviesByWord= document.getElementById("allMovies");
let search_bar = document.getElementById("word");
let result = document.getElementById("res");

let URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44"; 
let imgPath = "https://image.tmdb.org/t/p/w500";
let allMovies;

getMovies();


function getMovies()
{   let myHttp=new XMLHttpRequest();
    myHttp.open('GET',URL);
    myHttp.send();
    
    myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState==4 && myHttp.status==200)
        {
            
            allMovies = JSON.parse(myHttp.response).results;
           
        
           displayMovies();
        
         

        }
    });
    
}

function displayMovies()
{
    let str=``;
    for ( let a = 0; a < allMovies.length; a++)
    str += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
                <div class="movie shadow rounded position-relative"> 
                    <div class="post">   
                        <img src=' ${imgPath + allMovies[a].poster_path} ' class="img-fluid rounded"/>';
                        <div class="layer d-flex align-items-center ">\n                 
                            <div class="info p-0">\n                   \n 
                                <h2>  ${allMovies[a].original_title} </h2>\n  
                                <p> ${allMovies[a].overview} </p>\n
                                <p > rate: ${allMovies[a].vote_average} </p>\n  
                                <p>${ allMovies[a].release_date} </p>\n                        \n  
                            </div> 
                        </div> 
                    </div>                  
                </div>
            </div> `;


    row.innerHTML =str; 
                                                                                                                                                            
} // end displayMovies

function getMoviesByWord(e) 
{ let myHttp= new XMLHttpRequest, 
   t = "https://api.themoviedb.org/3/search/movie?query=" + e + "&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false"; 
   myHttp.open("GET", t);
   myHttp.send(); 
   myHttp.addEventListener('readystatechange',function(){
    if(myHttp.readyState==4 && myHttp.status==200)
    {
        
        allMovies = JSON.parse(myHttp.response).results;
        
        displayMovies();
    
    }});
      
} // end getMoviesByWord(e)


allMoviesByWord.addEventListener('keyup' ,function () 
{ 
    getMoviesByWord(allMoviesByWord.value);
});

search_bar.addEventListener('keyup' ,function () 
{ let e = search_bar.value;
  let str=``;
  if (e==str)   result.innerHTML = " empty ";
  else
  {
    for (let a = 0; a < allMovies.length; a++)
    {
       if(allMovies[a].original_title.includes(e))
       {
         
        str += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
                <div class="movie shadow rounded position-relative"> 
                    <div class="post">   
                        <img src=' ${imgPath + allMovies[a].poster_path} ' class="img-fluid rounded"/>';
                        <div class="layer d-flex align-items-center ">\n                 
                            <div class="info p-0">\n                   \n 
                                <h2>  ${allMovies[a].original_title} </h2>\n  
                                <p> ${allMovies[a].overview} </p>\n
                                <p > rate: ${allMovies[a].vote_average} </p>\n  
                                <p>${ allMovies[a].release_date} </p>\n                        \n  
                            </div> 
                        </div> 
                    </div>                  
                </div>
               </div> `;
        result.innerHTML =str; 
       } // end if
    } // end for 
   }// end else
   
});

//  Part Contact Us
//--------------------------------------------
let userName = document.getElementById("name"); 
let userEmail = document.getElementById("email"); 
let userPhone = document.getElementById("phone"); 
let userAge = document.getElementById("age"); 
let userPassword = document.getElementById("password"); 
let userRePassword = document.getElementById("rePassword");

let userNameAlert = document.getElementById("namealert"); 
let userEmailAlert = document.getElementById("emailalert"); 
let userPhoneAlert = document.getElementById("phonealert");
let userAgeAlert = document.getElementById("agealert"); 
let userPasswordAlert = document.getElementById("passwordalert"); 
let userRePasswordAlert = document.getElementById("repasswordalert");

let contact=document.getElementById("contact");
let submitBtn=document.getElementById("submitBtn");
//-------------------------------------------------------


function userNameValid() 
{ 
  let regName=/^[a-zA-Z0-9]+$/;
  if(regName.test(userName.value))
  {   
      userNameAlert.style.display = "none";
      return true;
  }
    else
  {
     userNameAlert.style.display = "block"; 
     return false;
  }
    
}

function userEmailValid() 
{ let regName=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(regName.test(userEmail.value))
   { 
       userEmailAlert.style.display = "none";
       return true;
   }
  else
   {
       userEmailAlert.style.display = "block";
       return false;
   }
}

function userPhoneValid() 
{ let regName=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if(regName.test(userPhone.value))
  { userPhoneAlert.style.display = "none";
    return true;
  }
  else
  { userPhoneAlert.style.display = "block";
    return false;
  }
  
}

function userAgeValid() 
{ let regName=/^[1-9][0-9]?$|^100$/;
  if(regName.test(userAge.value))
  {
    userAgeAlert.style.display = "none"; 
    return true; 
  }
  
  else
  {
    userAgeAlert.style.display = "block";
    return false;
  }
  
}

function userAgeValid() 
{ let regName=/^[1-9][0-9]?$|^100$/;
  if(regName.test(userAge.value))
  {
    userAgeAlert.style.display = "none"; 
    return true; 
  }
  
  else
  {
    userAgeAlert.style.display = "block";
    return false;  
  }
  
}

function userPasswordValid() 
{ let regName=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if(regName.test(userPassword.value))
  {
   userPasswordAlert.style.display = "none";  
   return true; 
  }
  
  else
  {
  userPasswordAlert.style.display = "block";
  return false;
  }
  
}

function userRePasswordValid() 
{ 
  if(userPassword.value == userRePassword.value)
  { 
      console.log(userPassword.value +" *** "+userRePassword.value);
    userRePasswordAlert.style.display = "none";
    return true;
  }
  else
  {
     userRePasswordAlert.style.display = "block";
     return false;  
  }
 
}



//--------------------------------------------------------
userName.addEventListener('keyup',function(){ userNameValid();  });
userEmail.addEventListener('keyup',function(){ userEmailValid();  });
userPhone.addEventListener('keyup',function(){ userPhoneValid();  });
userAge.addEventListener('keyup',function()  { userAgeValid();  });
userPassword .addEventListener('keyup',function()  { userPasswordValid();  });
userRePassword .addEventListener('keyup',function()  { userRePasswordValid();  });

//---------------------------------------------------------------------
contact.addEventListener("click" ,function()
{
    console.log(`userNameValid() :${userNameValid()}`);
    console.log(`userEmailValid() :${userEmailValid()}`);
    console.log(`userPhoneValid() :${userPhoneValid()}`);
    console.log(`userAgeValid() :${userAgeValid()}`);
    console.log(`userPasswordValid() :${userPasswordValid()}`);
    console.log(`userRePasswordValid() :${userRePasswordValid()}`);


    if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid())
    
    {submitBtn.disabled=1;
        clear();
     
    }  // true
    else
    submitBtn.disabled=0;  // false
}
);
function clear()
{
    userName.value=""; 
    userEmail.value = ""; 
    userPhone.value = "";  
    userAge.value = ""; 
    userPassword.value = ""; 
    userRePassword.value = ""; 
}

//////////////////////////////////// 
$('.strip-toggel-menu').click(function()
{
    if(!$(".nav-tab-menu").hasClass("open-menu"))
    {
        $(".nav-tab-menu").addClass("open-menu").removeClass("close-menu");
        $(".strip-header-nav").css("left" ,$(".nav-tab-menu").outerWidth());
        $(".fa-align-justify").toggleClass("fa-times");

        $(".nav-tab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100);
        $(".nav-tab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1300);
        $(".nav-tab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1600);
        $(".nav-tab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1900);
        $(".nav-tab-menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 2200);
        $(".nav-tab-menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 2500);
    }
   else
   {
    $(".nav-tab-menu").addClass("close-menu").removeClass("open-menu");
    $(".strip-header-nav").css("left" ,0);
    $(".fa-times").toggleClass("fa-align-justify");
    $(".nav-tab-menu li").animate({ opacity: "0", paddingTop: "500px" }, 500);

   }
    
    
   // console.log($(".nav-tab-menu").width()  );
   // console.log($(".nav-tab-menu").innerWidth()  );
  //  console.log($(".nav-tab-menu").outerWidth()  );
   // console.log($(".nav-tab-menu").outerWidth()  );
   // $(".nav-tab-menu").toggle(1000);
  // $(".strip-header-nav").animate({left:250},1000);

  // $(".nav-tab-menu").animate({left:250},1000);

})