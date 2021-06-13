function poke_append(n, str)
{
    var head = document.createElement('H2');    //  H2 Object
    var text = document.createTextNode("#" + n);    //Text it contains
    head.appendChild(text);

    var imag = document.createElement('img');   //Image
    imag.src = str;

    var node = document.createElement("pokemon-element");   //Complete Object to be appended
    node.appendChild(head);
    node.appendChild(imag);
    node.id = "pokemon-ele";
    document.getElementById("pokemon-element").appendChild(node);
}

var str = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for (i=1; i<899; i++)
{
    var n = i.toString(10);
    var str1 = str + n + '.png';
    console.log(str1);
    poke_append(n, str1);
}