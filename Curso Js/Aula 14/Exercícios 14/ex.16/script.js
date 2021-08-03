function contar() {

    var inicio = document.getElementById('txti')
    var fim = documet.getElementById('txtf')
    var passo = document.getElementById('txtp')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) 
    
    {
        
        window.alert('[ERRO] Faltam Dados!')

    }else{
        
        window.alert('TUDO OK!!')
    
    }

}