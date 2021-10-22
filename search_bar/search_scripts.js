// getting all required elements
const searchWrapper = document.querySelector(".search_input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom_box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            
            // execute search results 

        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }



    // setting the dynamic height above the first catagory container and this is beacuase 
    // the autocom_box height is dynamic according to the search suggestions!... 
    // var liBoxDivHght = document.getElementById("autocom_box").offsetHeight;
    // console.log(liBoxDivHght + 185);
    // $(".spacer_catagory").css("height", liBoxDivHght + 185 +"px");


}



function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
       
        // execute search results 

    }
    searchWrapper.classList.remove("active");

        // setting the dynamic height above the first catagory container and this is beacuase 
    // the autocom_box height is dynamic according to the search suggestions!... 
    var liBoxDivHght = document.getElementById("autocom_box").offsetHeight;
    // console.log(liBoxDivHght + 185);
    // $(".spacer_catagory").css("height", liBoxDivHght + 185 +"px");


}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
