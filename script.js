function id(aId){
    return document.getElementById(aId);
}

function gerar_senha(){
    var size        =       id("numCarac").value;
    if(size > 28 || size < 0){
        id("lblPass").innerHTML = "No max. 28<br>No min. 1"
    }else{
        var numeros     =       [48, 57];
        var letras_up   =       [65, 90];
        var letras_low  =       [97, 122];
        var especial    =       [33, 35, 36, 37, 38, 40, 41, 42, 45, 46, 47, 63, 64, 91, 93, 94, 95, 123, 124, 125, 126];
        var pass_jnt    =       [numeros, letras_up, letras_low, especial];
        var pass_gen    =       '';

        for(var i=0;i < size; i++){
            var type = parseInt(Math.random() * pass_jnt.length);
            if(type === 3){
                pass_gen += String.fromCharCode(especial[parseInt(Math.random() * especial.length )]); 
            }else{
                pass_gen += String.fromCharCode(Math.floor(Math.random()*(pass_jnt[type][1]-pass_jnt[type][0]))+pass_jnt[type][0]);
            }
            
        }
        return id("lblPass").innerHTML = pass_gen;
    }
    
}
