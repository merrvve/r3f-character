import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import { UI } from './components/UI';

function App() {
 
  return (
    <>
      <UI />
      <Canvas camera={{position:[3,3,3]}}>
        <color attach="background" args={['#333333']} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[0.5,0.5,0.5]}/>
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
