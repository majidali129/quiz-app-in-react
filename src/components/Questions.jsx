import Button from "./Button";
import Options from "./Options";
import Timer from "./Timer";


export default function Questions({question, answer, dispatch, index, remainingSeconds}) {
  // console.log(question)
  // console.log(answer)
  return (
    <section>
      <div className="flex flex-col mb-2 space-y-4">
          <>
          <h3>{question.question}</h3>
           <Options question={question}  options={question.options} dispatch={dispatch} answer={answer} />;
          </>
      </div>
      <div className="flex justify-between ">
      <Timer dispatch={dispatch} remainingSeconds={remainingSeconds} />
      {answer !== null && <Button onclick={()=>{ dispatch( {type:index < 14 ? 'NEXT_INDEX' : 'FINISH'} ) }} >{index < 14? 'Next': 'Finish'}</Button>}
      </div>
    </section>
  );
}
