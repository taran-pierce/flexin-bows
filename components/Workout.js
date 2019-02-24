import WorkoutTable from './WorkoutTable'

const Workout = (props) => {
  const data = props.data
  const plans = props.data.workout
  
  return (
    <section className={`workout`}>
      <style jsx>{`
        h1 {
          background-color: #7c6f5e;
          margin: 0;
          color: #dfd2c8;
          text-shadow: -1px -1px rgba(0,0,0,.3);
          padding: .5rem;
        }
        
        .workout {
          padding: 1rem;
        }
      `}</style>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <p><strong>Frequency: </strong>{data.frequency}</p>
      <p><strong>Time: </strong>{data.time}</p>
      <WorkoutTable plans={plans} />
    </section>
  )
}

export default Workout