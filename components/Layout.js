import Workout from "./Workout";
import Header from "./Header";
import WorkoutList from './WorkoutList'

const Layout = ( props) => {
  const links = [
    {
      name: 'Better Body',
      href: '/better-body'
    },
    {
      name: 'Advanced Conditioning',
      href: '/advanced-conditioning'
    },
    {
      name: 'Body Building',
      href: '/body-building'
    },
    {
      name: 'Strength Training',
      href: '/strength-training'
    },
    {
      name: 'Aerobic',
      href: '/aerobic'
    },
    {
      name: 'Upper Lower Body',
      href: '/upper-lower-body'
    },
    {
      name: 'Anaerobic',
      href: '/anaerobic'
    }
  ]
  
  if (props.data) {
    return (
      <div>
        <Header links={links} />
        <Workout data={props.data} />
      </div>
    )
  } else {
    return (
      <div>
        <Header links={links} />
        <WorkoutList links={links} />
      </div>
    )
  }
}

export default Layout