import Button from "./Button";

function Welcome({dispatch, questions}) {
  return (
    <div className="space-y-4 text-center" >
      <h2>Welcome to The React Quiz!</h2>
      <h3 className="text-medium"><span className="text-lg font-bold text-light">{questions.length}</span> questions to test your React mastery</h3>
      <Button onclick={()=>dispatch({type: 'start'})}>
        Let&apos;s Start
      </Button>
    </div>
  );
}

export default Welcome;
