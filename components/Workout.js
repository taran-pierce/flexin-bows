import WorkoutTable from './WorkoutTable'

const Workout = (props) => {
  const data = props.data
  
  const plans = props.data.plan
  
  console.log(`plans ${plans}`)
  
  return (
    <section>
      <h1>{data.title}</h1>
      <ul>
        <li>{data.content}</li>
        <li>{data.time}</li>
        <li>{data.frequency}</li>
      </ul>
      <WorkoutTable plans={plans} />
    </section>
  )
}

export default Workout