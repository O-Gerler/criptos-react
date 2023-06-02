/* eslint-disable react/prop-types */
import styled from "@emotion/styled"

const ErrorMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  font-size: 20px;
  font-weight: 700;
  font-family: 'poppins','Courier New', Courier, monospace;
  background-color: #a71f1fd3;
  font-size: 25px;
  color: white;
  border-radius: 10px;
` 

const Error = ({ children }) => {
  return (
    <ErrorMsg>{children}</ErrorMsg>
  )
}

export default Error