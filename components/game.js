import { useEffect, useState } from "react";
import firebase from "../firebase/clientApp";
import { useObject } from "react-firebase-hooks/database";
import styles from './game.module.css';

const Game = ({ roomName }) => {
  const [seconds, setSeconds] = useState(28);
  const [isActive, setIsActive] = useState(false);
  const [value, loading, error] = useObject(firebase.database().ref(roomName));
  const [gueses, setGuesses] = useState([
    "Clint Eastwood",
    "panda",
    "ice cream",
  ]);
  const [currentGuess, setCurrentGuess] = useState("");

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(28);
    setIsActive(false);
  }

  const correct = () => {
    updateScore(value.val().score + 20);
    setGuesses((prevGueses) => prevGueses.filter(g=>g !== currentGuess));
  };

  const wrong = () => {
    setGuesses((prevGueses) => prevGueses.filter(g=>g !== currentGuess));
  };

  const updateTimeFirebase = (newTime) => {
    firebase.database().ref(roomName).update({
      time: newTime,
    });
  };

  const updateScore = (score) => {
    firebase.database().ref(roomName).update({
      score: score,
    });
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      updateTimeFirebase(seconds);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    let number = Math.floor(Math.random()*gueses.length)
    setCurrentGuess(gueses[number]);
  }, [gueses]);


  return (
    <div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Value: Loading...</span>}
      {/* {value && <span>Value: {JSON.stringify(value.val())}</span>} */}
      {isActive && (
        <p className="nes-badge">
          <span className="is-primary">{currentGuess}</span>
        </p>
      )}

      <p>Seconds: {value && value.val().time}</p>
      <p>Score: {value && value.val().score}</p>
      <button className={`nes-btn is-primary ${styles.spacing}`} onClick={toggle}>
        {isActive?"Stop":"Start"}
      </button>
      <button className={`nes-btn is-success ${styles.spacing}`} onClick={correct}>
        Correct
      </button>
      <button className={`nes-btn is-error ${styles.spacing}`} onClick={wrong}>
        Wrong
      </button>
    </div>
  );
};

export default Game;
