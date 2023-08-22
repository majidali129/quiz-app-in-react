
export default function Option({children, question, index, dispatch, answer}) {   
  let isAnswer = answer !== null

  return (
    <button disabled={isAnswer? true: false} className={`secondary--btn  disabled:cursor-not-allowed ${answer === index? 'md:translate-x-8 translate-x-4': ''} ${isAnswer ? index === question.correctOption ? 'correct' : 'wrong': '' } `}
    onClick={()=>{ dispatch({type: 'answer', payload: index})}}
    >{children}</button>
  )
}



// correct  #8ac926
// wrong #6f1d1b