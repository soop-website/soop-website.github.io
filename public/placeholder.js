var colors = ['#C32026', '#E3C828','#5AB449','#29ACA7','#2495CE','#D11E85','#7A2B88'];
var i = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[i];
    i++
    if(i == colors.length) i = 0;
}, 800);