import Showcase from "./Showcase";
import image from "./images/bulbasaur.jpg"
import './App.css';


function App() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {type: "Grass", move:"Vine Whip"}
  const styles = {
    backgroundColor: 'green',
    color: 'white'
  }
    return (
    <div className='background'>
      <Showcase/>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={image} alt={favPokemon}
      style={{width: '200px', height: '150px', borderRadius:'50%', objectFit: 'cover'}}/>
      <h2>
        <span style={styles}>
          {pokeCharacteristics.type}
        </span>
        <span style = {styles}>
          Bulbasaur's type is {pokeCharacteristics.type} and one of their moves is {pokeCharacteristics.move}.
        </span>
      </h2>
    </div>
  );
}

export default App;