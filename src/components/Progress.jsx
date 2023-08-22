
export default function Progress({questions, index, answer,  gainedPoints, totalPoints}) {
  // console.log(typeof answer)
  return (
    <header className="flex flex-col justify-between text-xl gap-y-2" >
        
      <progress id="file" value={(index + Number(answer !== null))} max={questions.length} className="progress"> 32% </progress>
      <p className="flex justify-between text-medium">
      <span>
        Question <span>{index + 1}/{questions.length}</span>
      </span>
      <span>
      {gainedPoints} / {totalPoints}
      </span>
      </p>
      </header>
  )
}
