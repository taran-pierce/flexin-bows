import Link from 'next/link'

const WorkoutTableHeader = (props) => {
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
      `}</style>
      <ul>
        {props.days.map( (day) => (
          <li key={day.title}>
            <Link href={`#`}>
              <a>{day.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkoutTableHeader