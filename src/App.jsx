import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const lengtharray = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(lengtharray).fill(0));

  //console.log("length of anectodes", lengtharray);

  const handlenextAnectode = () => {
    const randomIndex = Math.floor(Math.random() * lengtharray);
    console.log("random index of anectodes", randomIndex);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    console.log(selected);

    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  //console.log(votes);
  //console.log(votes.indexOf(Math.max(...votes)));

  return (
    <div>
      <Anectode
        text={"Anectode of the day"}
        anecdotes={anecdotes[selected]}
        selected={selected}
        votes={votes[selected]}
      />
      <Button text={"vote"} onhandlebtn={handleVote} />
      <Button text={"next anectode"} onhandlebtn={handlenextAnectode} />
      {Math.max(...votes) > 0 && (
        <Anectode
          text={"Anectode with most votes"}
          anecdotes={anecdotes[votes.indexOf(Math.max(...votes))]}
          votes={Math.max(...votes)}
        />
      )}
    </div>
  );
};

const Anectode = ({ anecdotes, votes, text }) => {
  return (
    <>
      <h1>{text}</h1>
      <div>{anecdotes}</div>
      <p>has {votes} votes</p>
    </>
  );
};

const Button = ({ text, onhandlebtn }) => {
  return <button onClick={onhandlebtn}>{text}</button>;
};

export default App;
