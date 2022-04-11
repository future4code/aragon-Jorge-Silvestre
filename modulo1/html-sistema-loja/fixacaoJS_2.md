```
function calculaPrecoTotal(quantidade) {
  if (quantidade < 12) {
    const precoMaca = quantidade * 1.30
    return precoMaca
  } else {
    const precoMaca = quantidade * 1
    return precoMaca
  }
}
```