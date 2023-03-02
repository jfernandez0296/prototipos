function Auto () {
    this.velocidad=0;
}
    Auto.prototype.acelerar=function (numero){
        this.velocidad+=numero; 
    }
    Auto.prototype.frenar=function(numero1) {
        this.velocidad-=numero1;
        if(this.velocidad<0)
            {this.velocidad=0;}
        return this.velocidad;    
    }


const a1 = new Auto();
a1.velocidad; 
a1.acelerar(1);
a1.acelerar(4);
console.log(a1.velocidad);

