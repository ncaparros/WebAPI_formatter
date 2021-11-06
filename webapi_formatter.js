var button = document.getElementById("btn");

function formatJSON() {
  var bodyContent = document.getElementsByTagName("body").item(0).innerText;
  var formattedContainer = document.getElementsByTagName("pre").item(0);
  formattedContainer.innerText = JSON.stringify(JSON.parse(bodyContent)).replace('[', '\n[\n\t').replace(']', '\n]').replaceAll('},','\n\t},\n\n\t').replaceAll(',\"',',\n\t\t\"');
}

button.addEventListener("click", async () => {
  var [tab] = await chrome.tabs.query({ active : true, currentWindow : true});
  chrome.scripting.executeScript({
    target : { tabId : tab.id},
    function : formatJSON,
  });
});
