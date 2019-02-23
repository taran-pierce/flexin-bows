import Link from 'next/link'

const WorkoutList = (props) => {
  return (
    <div>
      <ul>
        {props.links.map( (link) => (
          <li>
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