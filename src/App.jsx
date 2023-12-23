import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <mesh position={[1.4, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"skyblue"} />
      </mesh>
    </Canvas>
  );
}

export default App;
