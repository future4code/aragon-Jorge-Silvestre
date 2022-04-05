``` function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  
 const comissao100Reais = qtdeCarrosVendidos * 100
 const cincoPorcentoDoValorDoCarro = valorTotalVendas * 0.05
 const salarioFinal = comissao100Reais + cincoPorcentoDoValorDoCarro + 2000
 return salarioFinal
}

console.log(calculaSalario(3,130000)) ```