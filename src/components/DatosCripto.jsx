/* eslint-disable react/prop-types */

import styled from "@emotion/styled"

const Contenedor = styled.div`
  font-size: 25px;
  font-family: 'poppins','Courier New', Courier, monospace;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 600px){
    flex-direction: column;
    text-align: center;
    gap: 0;
  }
`

const Texto = styled.p`
  font-size: 15px;
`

const Imagen = styled.img`
  display: block;
  max-width: 250px;
`

const DatosCripto = ({datosCriptomoneda}) => {

  const {PRICE, LASTUPDATE, CHANGE24HOUR, CHANGEDAY, IMAGEURL} = datosCriptomoneda

  return (
    <Contenedor>
      <Imagen src={`https://CryptoCompare.com${IMAGEURL}`} alt="" />
      <div>
        <p>Precio: <br /> {PRICE}</p>
        <Texto>Ultima actualizacion: <br /> {LASTUPDATE}</Texto>
        <Texto>Cambio ultimas 24 horas: <br /> {CHANGE24HOUR}</Texto>
        <Texto>Cambio ultimos dias: <br /> {CHANGEDAY}</Texto>
      </div>
      
    </Contenedor>
  )
}

export default DatosCripto