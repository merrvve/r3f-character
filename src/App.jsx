import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import { UI } from './components/UI';
import { Experience } from './components/Experience';

function App() {
 
  return (
    <>
      <UI />
      <Canvas camera={{position:[3,3,3]}}>
        <color attach="background" args={['#333333']} />
        <OrbitControls />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
