import axios from "axios"
import { useEffect, useState } from "react"
import { colors } from "../Constants/changeColors"
import { BASE_URL } from "../Constants/url"
import UseRequestData from "../Hooks/UseRequestData"

export default function MegaSenaPage() {

  const [loterias] = UseRequestData([], `${BASE_URL}/loterias`)
  const [concursos] = UseRequestData([], `${BASE_URL}/loterias-concursos`)
  const [sorteio, setSorteio] = useState([])
  const [selectValue, setSelectValue] = useState("0")

  const concursoId = concursos.filter((lot) => lot.loteriaId == selectValue).map((lot) => lot.concursoId)
  const color = colors.filter((lot) => lot.id == selectValue).map((lot) => lot.color)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/concursos/${concursoId[0]}`)
      .then((res) => {
        setSorteio([res.data])
      })
      .catch((err) => {

      })
  }, [selectValue])



  return (
    <>
      <h1>Home</h1>
      <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
        {loterias.map((lot) => (<option value={lot.id} key={lot.id}>{lot.nome.toUpperCase()}</option>))}
      </select>

      {sorteio.map(lot => (
        <>
          <div>
            {/* <img src={} alt="Logo" /> */}
            {colors.filter((lot) => lot.id == selectValue).map((lot) => (<span>{lot.name.toLocaleUpperCase()}</span>))}
          </div>

          <footer>
            <p> CONCURSO </p> <span>{lot.id} - {(`${lot.data}`)}</span>
          </footer>
        </>
      ))}

      <>
        <ul>
          {sorteio.map(lot => lot.numeros.map(num => (
            <li>
              <strong>{num}</strong>
            </li>
          )))}
        </ul>
        <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
      </>
    </>
  )
}