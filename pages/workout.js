import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

class Page extends React.Component {
  constructor( props ) {
    super( props )

    // grab ID from first day workout
    const activeTab = props.data.workout.days[0].id

    // grab fileName of first image in workout
    const image = props.data.workout.days[0].bodyParts[0].exercises[0].fileName
  
    this.state = {
      activeTab: activeTab,
      image: `/static/images/exercises/edited/${image}.jpg`,
      value: '',
      showDesc: 1,
      imageSize: 'small',
      tableSize: 'large',
    }
  
    this.onWorkoutClick = this.onWorkoutClick.bind(this)
    this.onBodyPartClick = this.onBodyPartClick.bind(this)
    this.toggleDesc = this.toggleDesc.bind(this)
    this.onSizeChange = this.onSizeChange.bind(this)
    this.onTableSizeChange = this.onTableSizeChange.bind(this)
  }
  
  toggleDesc() {
    if ( this.state.showDesc ) {
      this.setState({ showDesc: 0 })
    } else {
      this.setState({ showDesc: 1 })
    }
  }

  onSizeChange( event ) {
    event.preventDefault()

    if (this.state.imageSize === 'large') {
      this.setState({ imageSize: 'small' })
    } else {
      this.setState({ imageSize: 'large' })
    }
  }

  onTableSizeChange( event ) {
    event.preventDefault()

    if (this.state.tableSize === 'large') {
      this.setState({ tableSize: 'small' })
    } else {
      this.setState({ tableSize: 'large' })
    }
  }
  
  onBodyPartClick( event ) {
    event.preventDefault()

    const fileName = `/static/images/exercises/edited/${event.target.dataset.file}.jpg`
    
    this.setState({ image: fileName })
  }
  
  onWorkoutClick( event ) {
    event.preventDefault()

    const id = event.target.dataset.id
    
    this.setState({ activeTab: id })
  }
  
  render() {
    return (
      <Layout
        data={this.props.data}
        activeTab={this.state.activeTab}
        toggleDesc={this.toggleDesc}
        showDesc={this.state.showDesc}
        onWorkoutClick={this.onWorkoutClick}
        onBodyPartClick={this.onBodyPartClick}
        image={this.state.image}
        onSizeChange={this.onSizeChange}
        onTableSizeChange={this.onTableSizeChange}
        imageSize={this.state.imageSize}
        tableSize={this.state.tableSize}
      />
    )
  }
}

Page.getInitialProps = async function( res ) {
  const title = res.query.title
  const data = require(`../data/programs/${title}`)

  return {
    data: data
  }
}

Page.propTypes = {
  data: PropTypes.any.isRequired
}

export default Page