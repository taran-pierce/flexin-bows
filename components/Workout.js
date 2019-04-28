import WorkoutTable from './WorkoutTable'
import ImageCard from './ImageCard'
import PropTypes from 'prop-types'

const Workout = ( props ) => {
  const data = props.data
  const plans = props.data.workout

  let toggleIcon = '(Show Description)'

  if ( props.showDesc ) {
    toggleIcon = '(Hide Description)'
  }

  let sizeIcon = '(Smaller Image)'

  if ( props.imageSize === 'small' ) {
    sizeIcon = '(Larger Image)'
  }

  let tableIcon = '(Smaller Table)'

  if ( props.tableSize === 'small' ) {
    tableIcon = '(Larger Table)'
  }
  
  return (
    <section className={`workout ${props.showDesc ? 'active' : ''}`}>
      <style jsx>{`
        h1 {
          background-color: #7c6f5e;
          box-shadow: 0 1px 2px rgba(0,0,0,.4);
          margin: 0;
          color: #dfd2c8;
          text-shadow: -1px -1px rgba(0,0,0,.3);
          padding: .5rem;
        }
        
        .close {
          float: right;
        }

        .workout {
          padding: 1rem;
        }
        
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
          width: 60%;
        }

        .flex-item.image {
          width: 40%;
        }

        .flex.large-image .flex-item.image {
          width: 56%;
        }
        .flex.large-image .flex-item.table {
          width: 44%;
        }

        .flex.small-image .flex-item.image {
          width: 40%;
        }
        .flex.small-image .flex-item.table {
          width: 60%;
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

        small {
          font-size: 60%;
          padding-top: .5rem;
        }

        small + small {
          margin-right: .5rem;
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
      `}</style>
      <h1>{data.title} 
        <small id={'toggle-desc'} className={'close'} onClick={props.toggleDesc}>{toggleIcon}</small>
        <small id={'toggle-size'} className={'close'} onClick={props.onSizeChange}>{sizeIcon}</small>
        <small id={'toggle-table-size'} className={'close'} onClick={props.onTableSizeChange}>{tableIcon}</small>
      </h1>
      <div className={'workout-content'}>
        <p><strong>Frequency: </strong>{data.frequency}</p>
        <p><strong>Time: </strong>{data.time}</p>
        <p>{data.content}</p>
      </div>
      <div className={`flex ${props.imageSize === 'large' ? 'large-image' : 'small-image'}`}>
        <div className={'flex-item table'}>
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
  activeTab: PropTypes.any.isRequired,
  showDesc: PropTypes.any.isRequired,
  imageSize: PropTypes.any.isRequired,
  tableSize: PropTypes.any.isRequired,
  toggleDesc: PropTypes.any.isRequired,
  onSizeChange: PropTypes.any.isRequired,
  onTableSizeChange: PropTypes.any.isRequired,
  onBodyPartClick: PropTypes.any.isRequired,
  onWorkoutClick: PropTypes.any.isRequired,
  image: PropTypes.any.isRequired,
}

export default Workout