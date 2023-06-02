/* eslint-disable react/prop-types */
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"
import { useEffect, useState } from "react"
import Error from "./Error"

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  font-size: 20px;
  color: white;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  &:hover{
    background-color: #7a7bFE;
    cursor: pointer;
  }
`

const Formulario = ({ setMonedas }) => {
  const [ cripto, setCripto ] = useState([])
  const [ error, setError ] = useState(false)

  const [ moneda,SelectMonedas ] = useSelectMonedas('Selecciona tu moneda', monedas)
  const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Selecciona tu criptmoneda', cripto)

  useEffect(() => {
    const consultarAPI = async() => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=12&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map(cripto => {
        const obj = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }

        return obj
      })

      setCripto(arrayCriptos)
    }

    consultarAPI()
  }, [])

  const validarDatos = e => {
    e.preventDefault()

    if (!(moneda && criptomoneda)) {
      setError(true)
      return
    }

    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })
  }

  return (
    <form onSubmit={validarDatos}>
      {error && <Error>Debes seleccionar campos</Error>}
      <SelectMonedas />
      <SelectCriptomonedas />
      <InputSubmit 
        type="submit" 
        value="Cotizar" 
      />
    </form>
  )
}

export default Formulario