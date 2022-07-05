
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Catalogo = {
    nome:string,
    anoLancamento:number,
    genero:GENERO,
    pontuacao?:number
}

function organizaCatalogoDeFilmes (nomeDoFilme:string,ano:number,generoDoFilme:GENERO,pontuaçãoDoFilme?:number):Catalogo {

    if (pontuaçãoDoFilme) {

        const catalogoComPontuacao:Catalogo = {
            nome:nomeDoFilme,
            anoLancamento:ano,
            genero:generoDoFilme,
            pontuacao:pontuaçãoDoFilme
        } 
        return catalogoComPontuacao
    } else {
        const catalogoSemPontuacao:Catalogo = {
            nome:nomeDoFilme,
            anoLancamento:ano,
            genero:generoDoFilme
        } 
        return catalogoSemPontuacao
    }
}

console.log(organizaCatalogoDeFilmes("Duna", 2021, GENERO.ACAO, 74))
console.log(organizaCatalogoDeFilmes("Duna", 2021, GENERO.ACAO))