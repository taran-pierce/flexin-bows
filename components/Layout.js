import Workout from './Workout'
import Header from './Header'
import WorkoutList from './WorkoutList'

const Layout = ( props ) => {
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
  
  if ( props.data ) {
    return (
      <div className={'main-layout'}>
        <style jsx global>{`
          body {
            background: url('/static/images/body-bg.png') top left repeat;
            margin: 0;
            padding: 0;
            font-family: 'Noto Sans JP', Helvetica, sans-serif;
          }

          .hidden {
            display: none;
          }
        `}</style>
        <Header
          links={links}
          toggleDesc={props.toggleDesc}
          searchValue={props.searchvalue}
          title={`Flexin Bows`}
        />
        <Workout
          data={props.data}
          activeTab={props.activeTab}
          onWorkoutClick={props.onWorkoutClick}
          onBodyPartClick={props.onBodyPartClick}
          image={props.image}
          toggleDesc={props.toggleDesc}
          showDesc={props.showDesc}
          onSizeChange={props.onSizeChange}
          onTableSizeChange={props.onTableSizeChange}
          imageSize={props.imageSize}
          tableSize={props.tableSize}
        />
      </div>
    )
  } else {
    return (
      <div className={'main-layout'}>
        <style jsx global>{`
          body {
            background: url('/static/images/body-bg.png') top left repeat;
            margin: 0;
            padding: 0;
            font-family: 'Noto Sans JP', Helvetica, sans-serif;
          }

          .hidden {
            display: none;
          }
        `}</style>
        <Header links={links} title={`Flexin Bows`} />
        <WorkoutList links={links} />
      </div>
    )
  }
}

export default Layout