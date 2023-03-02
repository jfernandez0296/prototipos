function Persona (nombre, peso, altura) {
    this.nombre=nombre;
    this.peso=peso;
    this.altura=altura;
    
    this.saludar=function (nombre1){
        return "Hola "+nombre1+",me llamo "+ this.nombre;
    }
    this.bmi=function() {
        return peso/(altura*altura);
    }
}

const pedro = new Persona("Pedro", 72, 1.5);
console.log(pedro.saludar("Maria")); // "Hola Maria, me llamo Pedro"
console.log(pedro.bmi()); // 32

