import WorkoutTable from './WorkoutTable'
import ImageCard from './ImageCard'
import PropTypes from 'prop-types'
import Icon from './Icon'

const Workout = ( props ) => {
  const data = props.data
  const plans = props.data.workout

  return (
    <section className={`workout ${props.showDesc ? 'active' : ''}`}>
      <style jsx>{`
        h1 {
          background-color: #7c6f5e;
          margin: 0;
          color: #dfd2c8;
          text-shadow: -1px -1px rgba(0,0,0,.3);
          padding: .5rem;
        }

        .flex-item.image {
          text-align: center;
        }
        .flex-item.table {
          margin-bottom: 1rem;
        }

        .workout {
          padding: 1rem;
        }

        .workout .workout-content {
          background: rgba(255,255,255,.5);
          border: 1px solid rgba(0,0,0,.4);
          box-shadow: 0 2px 2px rgba(0,0,0,.3);
          transition: opacity .5s ease-in-out,
                      max-height .5s ease-in-out,
                      box-shadow .5s ease-in-out,
                      padding .5s ease-in-out,
                      visibility .5s ease-in-out;
          opacity: 0;
          padding: 0 1rem;
          margin: 0 0 1rem;
          max-height: 0;
          visibility: hidden;
        }

        .workout.active .workout-content {
          opacity: 1;
          padding: 1rem;
          max-height: 600px;
          visibility: visible;
        }

        .workout.active h1 {
          box-shadow: none;
        }

        @media( min-width: 992px ) {

          .flex {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
          }
        
          .flex-item {
            flex-grow: 1;
            transition: width .5s ease-in-out;
          }

          .flex-item.table {
            width: 0;
            margin-right: 1rem;
          }
          .flex-item.table.active {
            width: 60%;
          }

          .flex-item.image {
            width: 100%;
          }
                
          .flex.large-image .flex-item.table.active + .flex.large-image .flex-item.image {
            width: 56%;
          }
          .flex.large-image .flex-item.table.active {
            width: 44%;
          }

          .flex.large-image .flex-item.table.active + .flex.small-image .flex-item.image {
            width: 40%;
          }
          .flex.small-image .flex-item.table.active {
            width: 60%;
          }
        }
      `}</style>
      <h1>{data.title}
        <Icon 
          name='angle-double-down'
          clickEvent={props.toggleDesc}
          active={props.showDesc}
        />
        <Icon 
          name='table'
          clickEvent={props.onTableSizeChange}
          active={props.tableSize === 'large' ? 1 : 0}
        />
      </h1>
      <div className={'workout-content'}>
        <p><strong>Frequency: </strong>{data.frequency}</p>
        <p><strong>Time: </strong>{data.time}</p>
        <p>{data.content}</p>
      </div>
      <div className={`flex ${props.imageSize === 'large' ? 'large-image' : 'small-image'}`}>
        <div className={ `flex-item table ${props.tableSize === 'large' ? 'active' :''}`}>
          <WorkoutTable
            plans={plans}
            activeTab={props.activeTab}
            onWorkoutClick={props.onWorkoutClick}
            onBodyPartClick={props.onBodyPartClick}
            tableSize={props.tableSize}
          />
        </div>
        <div className={'flex-item image'}>
          <ImageCard image={props.image} />
        </div>
      </div>
    </section>
  )
}

Workout.propTypes = {
  data: PropTypes.any.isRequired,
  activeTab: PropTypes.string,
  showDesc: PropTypes.number,
  imageSize: PropTypes.string,
  tableSize: PropTypes.string,
  toggleDesc: PropTypes.number,
  onSizeChange: PropTypes.func,
  onTableSizeChange: PropTypes.func,
  onBodyPartClick: PropTypes.func,
  onWorkoutClick: PropTypes.func,
  image: PropTypes.string,
}

export default Workout