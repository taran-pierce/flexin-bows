import Link from 'next/link'

const WorkoutList = (props) => {
  return (
    <div className={`list-container`}>
      <style jsx>{`
        .list-container {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        li {
          background: rgba(255,255,255,.3);
          border: 1px solid rgba(0,0,0,.3);
          border-radius: 8px;
          box-shadow: 0 2px 2px rgba(0,0,0,.3);
          margin: .5rem;
          flex-grow: 1;
        }

        a {
          color: #666;
          display: block;
          font-weight: 700;
          padding: 2rem 6rem;
          text-decoration: none;
        }
      `}</style>
      <ul>
        {props.links.map( (link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkoutList