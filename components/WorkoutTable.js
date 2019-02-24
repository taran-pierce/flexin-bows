import Link from 'next/link'

const WorkoutTable = (props) => {
  const days = props.plans.days
  
  return (
    <div>
      <ul>
        {days.map( (day) => (
          <li>
            {day.title}
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Body Part</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {days.map( (day) => (
            day.bodyParts.map( (part) => (
              <tr>
                <td>{part.name}</td>
                <td>
                  {part.exercises.map( (workout) => (
                    <p>
                      <Link href={`#`}>
                        <a>{workout.name}</a>
                      </Link>
                    </p>
                  ))}
                </td>
                <td>{part.sets}</td>
                <td>{part.reps}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkoutTable