var btn= document.getElementById("btn1")

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