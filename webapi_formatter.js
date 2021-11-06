var bodyContent = document.getElementsByTagName("body").item(0).innerText;
var formattedContainer = document.getElementsByTagName("pre").item(0);
formattedContainer.innerText = JSON.stringify(JSON.parse(body2)).replace('[', '\n[\n\t').replace(']', '\n]').replaceAll('},','\n\t},\n\n\t').replaceAll('\",\"','\",\n\t\t\"');
