function toggle()
{

    var toggle = document.getElementById("toggle");
    return function() {
        if(chrome.management.setEnabled === 0)
            chrome.management.setEnabled = 1
        else
        chrome.management.setEnabled = 0;
    }

}
