// . Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
//     informados	valores	iguais)	e	escrever	o	maior	deles.

// let numero1 = 50;
// let numero2 = 60;
// if (numero1 > numero2) {
//     console.log("Numero 1 é maior que numero 2")
// } else {
//     console.log("Numero2 maior que numero1")
// }
// ______________________________________________________________________________


// 2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
// escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
// (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

// let idade = 2024 - 2001;
// if (idade >= 16){
//     console.log("Pode votar")
// } else {
//     console.log("Não pode")
// }
// ______________________________________________________________________________


// 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
// pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
// seguintes	mensagens:	
// ACESSO	PERMITIDO	caso	a	senha	seja	válida.	

// let senha = 1224;

// if (senha === 1234){
//     console.log("ACESSO PERMITIDO")
// } else {
//     console.log("ACESSO NEGADO")
// }
// ______________________________________________________________________________


// 4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
// dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
// programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
// valor	total	da	compra.

// let quantidade = 13;
// let valor1 = 0.30;
// let valor2 = 0.25;

// if (quantidade < 12) {
//     console.log(`COMPRA VAREJO - O valor da compra para ${quantidade} é de R$ ${quantidade * valor1}.`)
// } else {
//     console.log(`COMPRA ATACADO - O valor da compra para ${quantidade} é de R$ ${quantidade * valor2}.`)
// }
// ______________________________________________________________________________


// 5. Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

// let numero1 = 7;
// let numero2 = 10;
// let numero3 = 9;

// if (numero1 < numero2 && numero1 < numero3 && numero2 < numero3) {
//     console.log(`${numero1}, ${numero2}, ${numero3}`)

// } else if (numero1 < numero2 && numero1 < numero3 && numero2 > numero3) {
//     console.log(`${numero1}, ${numero3}, ${numero2}`)

// } else if (numero1 > numero2 && numero1 < numero3 && numero2 < numero3) {
//     console.log(`${numero2}, ${numero1}, ${numero3}`)

// } else if (numero1 > numero2 && numero1 > numero3 && numero2 < numero3) {
//     console.log(`${numero2}, ${numero3}, ${numero1}`)

// } else if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) {
//     console.log(`${numero3}, ${numero2}, ${numero1}`)

// } else if (numero1 < numero2 && numero1 > numero3 && numero2 > numero3) {
//     console.log(`${numero3}, ${numero1}, ${numero2}`)

// } else {
//     console.log(`Erro`)
// }
// ______________________________________________________________________________


// 6. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1:feminino 2:masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes
// Fórmulas:	
//     - para	homens: 	(72.7	*	Altura)	– 58
//     - para	mulheres:	(62.1	*	Altura)	– 44.7

// Masculino = 1
// Feminino = 2

// let altura = 1.60;
// // let tipoSexo = 2;

// // if (tipoSexo === 1) {
// //     console.log(`Sexo Masculino - O seu peso ideal é ${(72.7 * altura) - 58}kg.`);
// // }   else {
// //     console.log(`Sexo Feminino - O seu peso ideal é ${(62.1 * altura) - 44.7}kg.`);
// // }
// // // ______________________________________________________________________________


// // 7. Escreva um programa para ler	o número de lados de um polígono regular e a medida do lado (em	cm).	Calcular e imprimir	o seguinte:	
// // − Se o número de lados for igual a 3 escrever TRIÂNGULO	e o	valor da área
// // − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.	
// // − Se o número de lados for igual a 5 escrever PENTÁGONO.

// let numLados = 5;
// let medidaLados = 10;

// // Perímetro
// const perimetro = numLados * medidaLados;

// // Calcular área
// let area;

// if (numLados === 3) {
//   // Triângulo
//   area = (medidaLados * Math.sqrt(3)) / 4;
//   console.log(`Triângulo com ${area} unidades de área`);

// } else if (numLados === 4) {
//   // Quadrado
//   area = medidaLados ** 2;
//   console.log(`Quadrado com ${area} unidades de área`);

// } else if (numLados === 5) {
//   // Pentágono
//   // Calcular apótema usando trigonometria
//   const anguloInterno = 180 * (numLados - 2) / numLados;
//   const senoAnguloInterno = Math.sin(anguloInterno * Math.PI / 180);
//   const apotema = medidaLados * senoAnguloInterno / 2;
//   area = (perimetro * apotema) / 2;
//   console.log(`Pentágono com ${area} unidades de área`);
// } else {
//   console.log("Número de lados inválido. Digite um valor entre 3 e 5.");
// }
// // ______________________________________________________________________________


// 8. Acrescente as seguintes mensagens à solução do exercício anterior conforme o	caso.	
// − Caso o número	de lados seja inferior a 3 escrever NÃO É UM POLÍGONO.	
// − Caso o número	de lados seja superior a 5 escrever POLÍGONO NÃO IDENTIFICADO.

// let numLados = 3;
// let medidaLados = 10;

// // Perímetro
// const perimetro = numLados * medidaLados;

// // Calcular área
// let area;

// if (numLados === 3) {
//   // Triângulo
//   area = (medidaLados * Math.sqrt(3)) / 4;
//   console.log(`Triângulo com ${area} unidades de área`);

// } else if (numLados === 4) {
//   // Quadrado
//   area = medidaLados ** 2;
//   console.log(`Quadrado com ${area} unidades de área`);

// } else if (numLados === 5) {
//   // Pentágono
//   // Calcular apótema usando trigonometria
//   const anguloInterno = 180 * (numLados - 2) / numLados;
//   const senoAnguloInterno = Math.sin(anguloInterno * Math.PI / 180);
//   const apotema = medidaLados * senoAnguloInterno / 2;
//   area = (perimetro * apotema) / 2;
//   console.log(`Pentágono com ${area} unidades de área`);

// } else if (numLados < 3) {
//     console.log("NÃO É UM POLÍGONO");

// } else if(numLados > 5) {
//     console.log("POLÍGONO NÃO IDENTIFICADO");
// }

// ______________________________________________________________________________

// 9. Escreva um programa para	ler	3 valores inteiros e escrever o maior deles.	
// Considere que o usuário não informará valores iguais.

// let valor1 = 10
// let valor2 = 20
// let valor3 = 30

// if (valor1 > valor2 && valor1 > valor3) {
//     console.log(`O maior valor é ${valor1}`);

// }   else if (valor2 > valor1 && valor2 > valor3) {
//     console.log(`O maior valor é ${valor2}`);
    
// }   else if (valor3 > valor1 && valor3 > valor2) {
//     console.log(`O maior valor é ${valor3}`);
// }
// ______________________________________________________________________________

// 10. Escreva	um programa que leia as medidas dos lados de um triângulo e escreva	se ele é Equilátero,Isósceles ou Escaleno. Sendo que:	
// − Triângulo Equilátero:	possui os 3 lados iguais.	
// − Triângulo	Isóscele: possui 2 lados iguais.	
// − Triângulo	Escaleno: possui 3 lados diferentes.

// let ladoA = 5
// let ladoB = 5
// let ladoC = 4

// if (ladoA === ladoB && ladoA === ladoC) {
//     console.log("Possui os 3 lados iguais - Triângulo EQUILÁTERO");

//   } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//     console.log("Possui os 2 lados iguais - Triângulo ISÓSCELE");

//   } else {
//     console.log("Possui os 3 lados diferentes - Triângulo ESCALENO");
//   }
// ______________________________________________________________________________

// 11. Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:	
// − Triângulo	Retângulo: possui um ângulo reto. (igual a 90º)
// − Triângulo	Obtusângulo: possui um ângulo obtuso. (maior que 90º)	
// − Triângulo	Acutângulo: possui três ângulos agudos. (menor que 90º)

let anguloA = 90
let anguloB = 90
let anguloC = 90

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log("Erro: Os ângulos do triângulo devem ser maiores que 0 e menores que 180 graus.");
    console.log("Tente outra vez.");
    return;
}

if (anguloA + anguloB + anguloC !== 180) {
    console.log("Erro: A soma dos ângulos internos de um triângulo deve ser igual a 180 graus.");
    console.log("Tente outra vez.");
    return;
}

if (anguloA === 90 || anguloB === 90 || anguloC === 90) {
    console.log(`Triângulo RETÁNGULO: pois possui um ângulo reto. (igual a 90º)`)
    
}   else if (anguloA > 90 || anguloB > 90 || anguloC > 90) {
    console.log(`Triângulo OBTUSÂNGULO: pois possui um ângulo obtuso. (maior que 90º)`)
    
}   else if (anguloA < 90 && anguloB < 90 && anguloC < 90) {
    console.log(`Triângulo ACUTÂNGULO: pois possui três ângulos agudos. (menor que 90º)`)

}   else {
    console.log(`Tente outra vez`)
}
console.log("FIM DO PROGRAMA")

