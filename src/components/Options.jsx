import Option from "./Option"

export default function Options({question, options, dispatch, answer}) {
    // console.log(options)
  return (
    <div className="flex flex-col py-3 gap-y-4">

        {
            options.map((option, index) => {
                return <Option key={option} question={question}  index={index} dispatch={dispatch} answer={answer} > {option} </Option>
            })
        }
        
    </div>
  )
}
