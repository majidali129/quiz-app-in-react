import Button from "./Button";


export default function Result({dispatch, gainedPoints, totalPoints, maxPoints}) {
    
    let percentage = Math.floor((gainedPoints/totalPoints) * 100)

    let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <section className="space-y-4" >
       <div className="flex flex-col gap-3">
       <h3 className="px-2 py-4 rounded-full bg-success ">
          {emoji}  You scored <strong>{gainedPoints}</strong> out of {totalPoints} {(percentage)}%
        </h3>
        <p className="text-xl tracking-wide text-medium">(Highscore: {maxPoints} points)</p>
        </div>
        <div className="text-right ">
        <Button onclick={()=>dispatch({type: 'RESTART'})}> Restart Quiz </Button>
        </div>
    </section>
  )
}
