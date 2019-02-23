const WorkoutTable = (props) => {
  
  return (
    <div>
      <ul>
        {props.plans.map( (plan) => (
          <li>
            {plan.days}
          </li>
        ))}
      </ul>
      {props.plans.map( (plan) => (
        <table>
          <thead>
            <tr>
              <td>Body Part</td>
              <td>Exercise</td>
              <td>Sets</td>
              <td>Reps</td>
            </tr>
          </thead>
        </table>
      ))}
    </div>
  )
}

export default WorkoutTable