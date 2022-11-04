const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function(){
        //code here to do something
        console.log(window.location.href)

    }
}

function testFunction(){
    console.log("test")
}

function aFunc(){
    console.log('asdaffagdsg')
    location.href = 'https://www.youtube.com/watch?v=zHIryKuhYA4';
}

document.getElementById("testButton").addEventListener("click", aFunc)