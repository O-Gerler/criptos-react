import styled from '@emotion/styled'
import imagenCripto from '../public/imagen-criptos.png'
import Formulario from './components/Formulario'
import { useEffect, useState } from 'react'
import DatosCripto from './components/DatosCripto'
import Spinner from './components/Spinner'

const Heading = styled.h1`
  font-family: 'poppins', sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  width: 500px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66F;
    display: block;
    margin: 10px auto;
  }
  @media screen and (max-width: 520px){
    width: 350px;
  }
`

const Contenedor = styled.div`
  height: 90vh;
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media(max-width: 992px){
    flex-direction: column;
    gap: 20px
  }
  @media screen and (max-width: 520px){
    width: 350px;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [datosCriptomoneda, setDatosCriptomoneda] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const llamadaApi = async () => {
        setCargando(true)
        const { criptomoneda, moneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        
        const obj = resultado.DISPLAY[criptomoneda][moneda]

        setDatosCriptomoneda(obj)

        setTimeout(() => {
          setCargando(false)
        }, 1000)
      }
  
      llamadaApi()
    }
  }, [monedas])

  return (
    <>
      <Contenedor>
        <Imagen 
          src={imagenCripto}
          alt='imagenes criptomoneda'
        />
        <div>
          <Heading>Cotizacion de criptomonedas al instante</Heading>
          <Formulario 
            setMonedas={setMonedas}
          />
          {cargando && <Spinner></Spinner>}
          {Object.keys(monedas).length > 0 && !cargando &&
          <DatosCripto 
            datosCriptomoneda={datosCriptomoneda}
          />
          }
        </div>
        
      </Contenedor>
    </>
  )
}

export default App
