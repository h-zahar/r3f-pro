import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <mesh>
        <boxGeometry args={[2, 2, 5]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
}

export default App;
