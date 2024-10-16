// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Tracker />
    </Main>
  )
}

export default App;
