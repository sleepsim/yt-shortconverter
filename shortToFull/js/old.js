var btn= document.getElementById("btn1")
var ogLink = "n/a";
var newLink = null;
let vidId = "null";
var finLink = "null"

btn.addEventListener("click", function(){
  getCurrTabUrl();
  convertLink();
  updateTabUrl();
});

function getCurrTabUrl()
{
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) 
    {
            var ctab = tabs[0];
            document.getElementById("txt1").value= ctab.url;
            ogLink = ctab.url;
    });
}

function convertLink(){
  var link2 = ogLink.toString().split(".com/")
  let text = a;
  const array = text.toString().split(".com/");

  let ogLink = array[1].includes("shorts");

  let shortUrl = array[1];

  if(result){
    const linker = shortUrl;
    let newIdArr = linker.split("shorts/");
    vidId = newIdArr[1];
  }

  finLink = "https://www.youtube.com/" + vidId;

}

function updateTabUrl(){
  chrome.tabs.update(undefined, {url:`https://www.youtube.com/`});
}