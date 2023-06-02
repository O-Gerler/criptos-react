import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
  color: white;
  display: block;
  font-family: 'Poppins','Courier New', Courier, monospace;
  font-size: 25px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  display: block;
  font-family: 'Poppins','Courier New', Courier, monospace;
  font-size: 20px;
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
`

const useSelectMonedas = (label, opciones) => {
  
  const [state, setState] = useState('')
  
  const SelectMonedas = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map(opcion => (
          <option
            key={opcion.id} 
            value={opcion.id}
          >
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas