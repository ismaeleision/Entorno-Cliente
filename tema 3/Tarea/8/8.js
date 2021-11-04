function calculoTriangulos() {
  let base = prompt('Introduce la base del triangulo');
  let lado1 = prompt('Introduce un lado del triangulo');
  let lado2 = prompt('Introduce el otro lado del triangulo');
  base = parseFloat(base);
  lado1 = parseFloat(lado1);
  lado2 = parseFloat(lado2);
  let perimetro = base + lado1 + lado2;
  let area;
  let semiperimetro = perimetro / 2;
  let tipo;

  if (base == lado1 && base == lado2) {
    //es un triangulo equilatero
    tipo = 'equilatero';
    area = (Math.sqrt(3) * Math.pow(base, 2)) / 4;
  } else if (lado1 == lado2 && lado1 != base) {
    //es un triangulo isosceles
    tipo = 'isosceles';
    area = (base / 4) * Math.sqrt(4 * Math.pow(lado1, 2) - Math.pow(base, 2));
  } else if (base != lado1 && base != lado2 && lado1 != lado2) {
    //es un triangulo escaleno
    tipo = 'escaleno';
    area = Math.sqrt(
      semiperimetro *
        (semiperimetro - lado1) *
        (semiperimetro - lado2) *
        (semiperimetro - base)
    );
  }
  document.write(
    'El tipo es ' +
      tipo +
      ' el perimetro es ' +
      perimetro +
      'cm, siendo su area ' +
      area +
      ' cm^2'
  );
}
