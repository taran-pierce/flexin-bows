import WorkoutTableHeader from './WorkoutTableHeader'
import PropTypes from 'prop-types'

const hiddenWorkoutTableStyles = {
  opacity: 0,
  visibility: 'hidden',
  transition: 'all .5s ease-in-out',
  height: '0',
}

const visibleWorkoutTableStyles = {
  opacity: 1,
  visibility: 'visible',
  transition: 'all .5s ease-in-out',
  height: 'auto'
}

const WorkoutTable = ( props ) => {
  return (
    <div className={'workout-table'} style={props.tableSize === 'large' ? visibleWorkoutTableStyles : hiddenWorkoutTableStyles}>
      <WorkoutTableHeader
        plans={props.plans}
        onWorkoutClick={props.onWorkoutClick}
        activeTab={props.activeTab}
      />
      <style jsx>{`
         table {
           border-collapse: collapse;
           text-align: left;
           width: 100%;
         }
         
         td, th {
           padding: .2rem 1rem;
           border-right: 1px solid black;
           border-bottom: 1px solid black;
         }
         
         th {
           border-bottom-width: 2px;
         }

         p {
           margin: 0;
         }

         a {
           display: block;
         }
         
         th:last-child,
         td:last-child {
           border-right: none;
         }
         
         .workout-table {
           border: 1px solid black;
           border-bottom: none;
         }
         
         .hidden {
           display: none;
         }
      `}</style>
      {props.plans.days.map( ( day ) => (
        <div key={day.id}>
          <table className={day.id !== props.activeTab ? 'hidden' : 'active' }>
            <thead>
              <tr>
                <th>Body Part</th>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {day.bodyParts.map( ( part ) => (
                <tr key={part.name}>
                  <td>{part.name}</td>
                  <td>
                    {part.exercises.map( ( workout ) => (
                      <p key={workout.name}>
                        <a
                          href={'#'}
                          onClick={props.onBodyPartClick}
                          data-file={workout.fileName}>{workout.name}</a>
                      </p>
                    ))}
                  </td>
                  <td>{part.sets}</td>
                  <td>{part.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

WorkoutTable.propTypes = {
  plans: PropTypes.any.isRequired,
  activeTab: PropTypes.string,
  onWorkoutClick: PropTypes.func,
  onBodyPartClick: PropTypes.func,
  tableSize: PropTypes.string,
}

export default WorkoutTable