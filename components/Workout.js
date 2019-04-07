import WorkoutTable from './WorkoutTable'
import ImageCard from './ImageCard'

const Workout = (props) => {
  const data = props.data
  const plans = props.data.workout

  let toggleIcon = '+'

  if (props.showDesc) {
    toggleIcon = '-'
  }
  
  return (
    <section className={`workout`}>
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
          width: 50%;
          flex-grow: 1;
        }

        .workout-content p {
          background: rgba(255,255,255,.5);
          border: 1px solid rgba(0,0,0,.4);
          box-shadow: 0 2px 2px rgba(0,0,0,.3);
          transition: opacity .5s ease-in-out,
                      max-height .5s ease-in-out;
          opacity: 0;
          padding: 1rem;
          margin-top: 0;
          max-height: 0;
        }

        .workout-content.active p {
          opacity: 1;
          max-height: 600px;
        }
      `}</style>
      <div className={`workout-content ${props.showDesc ? 'active' : ''}`}>
        <h1>{data.title} <span id={`toggle-desc`} className={`close`} onClick={props.onChange}>{toggleIcon}</span></h1>
        <p>{data.content}</p>
      </div>
      <p><strong>Frequency: </strong>{data.frequency}</p>
      <p><strong>Time: </strong>{data.time}</p>
      <div className={`flex`}>
        <div className={`flex-item`}>
          <WorkoutTable
            plans={plans}
            activeTab={props.activeTab}
            onWorkoutClick={props.onWorkoutClick}
            onBodyPartClick={props.onBodyPartClick}
          />
        </div>
        <div className={`flex-item`}>
          <ImageCard image={props.image} />
        </div>
      </div>
    </section>
  )
}

export default Workout