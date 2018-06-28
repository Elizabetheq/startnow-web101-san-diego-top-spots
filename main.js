$(document).ready(function() {
    $.getJSON("./data.json", {type: "GET"} ).done( function(data) {
        //go through all of the data items
        //console.log(data[1])
        for (var i = 0; i < data.length; i++) {
            var individualData = data[i];
        
        //created a row
        var trElement = document.createElement('tr');
            
        //creating td
        var tdElement = document.createElement('td');
        var tdElement1 = document.createElement('td');
        var tdElement2 = document.createElement('td');
        
        //for element1 push the data.name

        //creating td2


        //td inside tr
        trElement.appendChild(tdElement);
        trElement.appendChild(tdElement1);
        trElement.appendChild(tdElement2);

        tdElement.innerHTML = individualData['name'];
        tdElement1.innerHTML = individualData['description'];

        //<a href="https://www.google.com/maps?q=' + individualData.location[0] + ',' + individualData.location[1]"
         var aElement = document.createElement('a');
         aElement.setAttribute('href', 'https://www.google.com/maps?q=' + individualData.location[0]+ ',' + individualData.location[1]);
         console.log(aElement)
         //aH
        //inside td


        // <button></button>
        var button = document.createElement('button');
        aElement.append(button)
        tdElement2.appendChild(aElement);
        button.textContent = "Google Maps"
        
    

// write your code here
$('tbody').append(trElement);

        }
});
});
