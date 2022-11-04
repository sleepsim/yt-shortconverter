var btn= document.getElementById("btn1")


btn.addEventListener("click", function(){
  getCurrTabUrl();
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    getCurrTabUrl();
  }
})


function getCurrTabUrl()
{
  var ogLink = "n/a";
  var newLink = null;
  let vidId = "null";
  var finLink = "null";

    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) 
    {
            var ctab = tabs[0];
            document.getElementById("txt1").value= ctab.url;
            ogLink = ctab.url;
            
            var ctab = tabs[0];

            var array = ogLink.toString().split(".com/");

            let ogLink2 = array[1].includes("shorts");

            let shortUrl = array[1];

            if(ogLink2){
              const linker = shortUrl;
              let newIdArr = linker.split("shorts/");
              vidId = newIdArr[1];

              finLink = "https://www.youtube.com/" + "watch?v=" + vidId;

              document.getElementById("txt1").value= finLink;

              chrome.tabs.update(undefined, {url:finLink});
            }
    });
}

function updateTabUrl(){
  chrome.tabs.update(undefined, {url:vidId});
}