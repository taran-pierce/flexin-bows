import PropTypes from 'prop-types'

const activeTabStyles = {
  background: '#7c6f5e',
  color: '#fafafa',
}

const tabStyles = {
  background: 'rgba(255,255,255,.5)',
}

const WorkoutTableHeader = ( props ) => {
  return (
    <div>
      <style jsx>{`
        ul {
          background: rgba(255,255,255,.8);
          border-bottom: 1px solid rgba(0,0,0,.3);
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-evenly;
          text-align: center;
        }
        
        li {
          flex-grow: 1;
          padding: .5rem 1rem;
          border-right: 1px solid rgba(0,0,0,.3);
          border-left: 1px solid rgba(255,255,255,.5);
        }
        
        li:last-child {
          border-right: none;
        }

        a {
          color: inherit;
          font-weight: 700;
        }
      `}</style>
      <ul>
        {props.plans.days.map( ( day ) => (
          <li key={day.title} style={day.id === props.activeTab ? activeTabStyles : tabStyles}>
            <a onClick={props.onWorkoutClick}
              href={'#'}
              data-id={day.id}>{day.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

WorkoutTableHeader.propTypes = {
  plans: PropTypes.any.isRequired,
  onWorkoutClick: PropTypes.any.isRequired,
  activeTab: PropTypes.any.isRequired,
}

export default WorkoutTableHeader