
import './App.css';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <DropdownMenu />
    </div>
  );
}

export default App;
