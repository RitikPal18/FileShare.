{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
// clock
setInterval(function () {
    var date = new Date();
    var format = [
        ("0" + date.getHours()).substr(-2)
        , ("0" + date.getMinutes()).substr(-2)
        , ("0" + date.getSeconds()).substr(-2)
    ].join(":");
    document.getElementById("output").innerHTML = format;
}, 500);


function myFunction() {
    
    let txt=document.getElementById("p-1");

    // txt.innerHTML = "in function";

    // alert("Page is loaded");

  }





updateList = function () {
    var input = document.getElementById('file');
    var output = document.getElementById('fileList');
    var iconFile = document.getElementById("iconFile");
    var textFile = document.getElementById("textFile");
    var formdiv = document.getElementById("formdiv");
    var getlink= document.getElementById("get-link");



    if(input.files.length <= 10){
        iconFile.className = "fas fa-folder";
        textFile.innerText = "  Add More ";
        formdiv.style.height = "252px";
        // formdiv.style.marginTop = "120px";
        output.style.marginTop = "10px";
        output.style.backgroundColor = "white";
        output.style.overflow = "scroll";
        output.style.overflowX = "hidden";
        output.style.overflowY = "scroll";
        getlink.style.visibility = "visible";
        getlink.style.marginTop = "10px";
        output.innerHTML = '<ul>';
        for (var i = 0; i < input.files.length; ++i) {
            output.innerHTML += '<li id=i >' + "<span>"+input.files.item(i).name +"</span>" + '<button class="cancel-btn" id="btn1"  onclick="removefile()"><i class="fa fa-times" aria-hidden="true"></i></button>' +'</li>';
            output.innerHTML += "<hr id=h>";
            if (i == 0) {
                formdiv.style.height = "400px";
                output.style.height = "80px";
                getlink.style.marginBottom = "20px";
                formdiv.style.marginTop = "10px";
            }
            else if (i == 1) {
                formdiv.style.height = "440px";
                output.style.height = "100px";
                getlink.style.marginBottom = "20px";
            }
            else if (i == 2) {
                formdiv.style.height = "480px";
                output.style.height = "180px";
                getlink.style.marginBottom = "20px";
            }
            else if (i == 3) {
                formdiv.style.height = "520px";
                output.style.height = "220px";
                getlink.style.marginBottom = "20px";
            }
            // else if (input.files.length>10){
            //         alert("file exist");
            // }
            else {
                // formdiv.style.height = "520px";
                output.style.height = "210px";
                getlink.style.marginBottom = "20px";

            }
        }
    }
    else{
        alert("You can only choose 15 files in one time");
    }    
}



function removefile() {
    var myobj = document.getElementById("i");
    var myobjh = document.getElementById("h");
    // var input = document.getElementById('file');
    var output = document.getElementById('fileList');
    var formdiv = document.getElementById("formdiv");
    var getlink= document.getElementById("get-link");

    myobj.remove();
    myobjh.remove();
    console.log()

    if (output.childElementCount == 1) {
        // filelist.style.visibility = "hidden";
        output.style.overflowY = "hidden";
        getlink.style.visibility = "hidden";
        formdiv.style.height = "252px";
        output.style.height = "5px";
        getlink.style.marginBottom = "20px";
        formdiv.style.marginTop = "10px";
    }
    else if (output.childElementCount == 3) {
        getlink.style.visibility = "visible";
        formdiv.style.height = "380px";
        output.style.height = "80px";
        getlink.style.marginBottom = "20px";
        formdiv.style.marginTop = "10px";
    }
    else if (output.childElementCount == 5) {
        formdiv.style.height = "400px";
        output.style.height = "100px";
        getlink.style.marginBottom = "20px";
    }
    else if (output.childElementCount == 7) {
        formdiv.style.height = "480px";
        output.style.height = "180px";
        getlink.style.marginBottom = "20px";
    }
    else{
        console.log();
    }
  
}

// copy link function
function copytext() {
    /* Get the text field */
    var copyText = document.getElementById("link");
    // var popup = document.getElementById("myPopup");

  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Link Copied : " + copyText.value);
  }

$(document).ready(function(){
    $("#get-link").click(function(){
      $(".Form_control").remove();
      $("#fileList,#get-link").remove();
      $("#formdiv").remove();
    //   $("#formdiv").css("width","350px");
    //   $("#formdiv").css("height","500px")
    });
  });


  $(document).ready(function(){
    $("#get-link").click(function(){

    $("#formdiv_2").css( "visibility","visible");
    $(".up_img").css( "visibility","visible");
    $("#link").css( "visibility","visible");

    $("#link").css("overflow","scroll");
    $("#link").css("overflowX","visible");
    $("#link").css("overflowY","hidden");
    $(".copy_link").css("visibility","visible");
    $(".get_link_button").css("visibility","visible");

    $(".Form__content_nav").css( "visibility","hidden");
        $(".nav_icon_1").css( "visibility","hidden");
        $(".nav_icon_2").css( "visibility","hidden");
        $(".nav_icon_3").css( "visibility","hidden");

    $("#formdiv_2").show();
    $(".up_img").show();
    $("#copy_link").show();
    $("#add-more").show();
    
   
    });
  });

//   change value of input
//   $(document).ready(function(){
//     $(".copy_link").click(function(){
//         $("#link").val("hello world");
//     });
// });

$(document).ready(function(){
    $("#file").click(function(){
        $(".Form__content_file_nav").css( "visibility","visible");
        $(".nav_icon_file_1").css( "visibility","visible");
        $(".nav_icon_file_2").css( "visibility","visible");
        $(".nav_icon_file_3").css( "visibility","visible");

        $(".Form__content_nav").css( "visibility","hidden");
        $(".nav_icon_1").css( "visibility","hidden");
        $(".nav_icon_2").css( "visibility","hidden");
        $(".nav_icon_3").css( "visibility","hidden");
  
    });
  });

  $(document).ready(function(){
    $("#get-link").click(function(){
       
        $(".Form__content_file_up_3").css( "visibility","visible");
        $(".nav_icon_file_up_1").css( "visibility","visible");
        $(".nav_icon_file_up_2").css( "visibility","visible");
        $(".nav_icon_file_up_3").css( "visibility","visible");

        $(".hr1").css( "visibility","hidden");
        $(".h-product").css( "visibility","hidden");
        $(".outer-f2-t2-addiv").css( "visibility","hidden");
        $(".inner-f2-t2-addiv").css("visibility","hidden");
        $(".hr2").css( "visibility","hidden");
    });
  });











