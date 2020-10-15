$(document).ready(function(){
    //Array de fila de numeros
    var linea0 = ['C','div']
    var linea1= ['7','8','9','mul']
    var linea2= ['4','5','6','sum']
    var linea3= ['1','2','3','res']
    var linea4= ['0','igual']
    ///////////////////////////////
    lineaN(linea0) ;
    lineaN(linea1) ;
    lineaN(linea2) ;
    lineaN(linea3) ;
    lineaN(linea4) ;
    //////////////////////////////
    apretarNumero('button0',0)
    apretarNumero('button1',1)
    apretarNumero('button2',2)
    apretarNumero('button3',3)
    apretarNumero('button4',4)
    apretarNumero('button5',5)
    apretarNumero('button6',6)
    apretarNumero('button7',7)
    apretarNumero('button8',8)
    apretarNumero('button9',9)

    guardarOperacion('buttondiv','/')
    guardarOperacion('buttonmul','*')
    guardarOperacion('buttonsum','+')
    guardarOperacion('buttonres','-')
    



    $('#buttonC').on('click', function() {
        $('#input').val("") ;
        $('#calculador').val("") ;
    })

    $('#buttonigual').on('click', function(){ 
        var operacion = $('#input').val() ;
        var cantidadGuardada = $('#calculador').text()
        var string= cantidadGuardada.split(" ") ;

        switch(string[0]) {
            case '+':
                resultado = parseInt(operacion) + parseInt(string[1]) ;
                $('#input').val(resultado) ;
            break ;
            case '-':
                resultado = parseInt(string[1]) - parseInt(operacion) ;
                $('#input').val(resultado) ;
            break ;
            case '*':
                resultado = parseInt(operacion) * parseInt(string[1]) ;
                $('#input').val(resultado) ;
            break ;
            case '/':
                resultado = parseInt(string[1]) / parseInt(operacion) ;   
                $('#input').val(resultado) ;
            break ;
        }
    
    })

    function lineaN(lista) {
        var elementos ;       
        for (var i=0; i<lista.length; i++) {  
           elementos = $('#calculadora').append('<button id=button' + lista[i] + ' >' + lista[i] + '</button>');
        }
        $('#calculadora').append("<tr>" + elementos +"</tr>")
    }

    function apretarNumero(id,valor) {
        $('#' + id).on('click', function() {
            var actual = $('#input').val() ;
            cadena = actual + valor ;
            $('#input').val(cadena)
        })
    }

    
    function guardarOperacion(id,operacion) {
        $('#' + id).on('click', function() {
            var actual = $('#input').val() ;
            $('#calculador').text(operacion+" "+actual) ;
            $('#input').val("") ;
        })
    }
    
     
    
})










