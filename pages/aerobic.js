import React from 'react'
import Layout from "../components/Layout";
import data from '../data/programs/aerobic.json'

class Page extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activeTab: 'aerobic-1',
      image: '/static/images/exercises/edited/bench-press-horizontal.jpg',
      value: '',
      showDesc: 1,
      imageSize: 'small'
    }
    
    this.onWorkoutClick = this.onWorkoutClick.bind(this)
    this.onBodyPartClick = this.onBodyPartClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSizeChange = this.onSizeChange.bind(this)
  }
  
  onWorkoutClick(event) {
    event.preventDefault()
    const id = event.target.dataset.id
    
    this.setState({ activeTab: id })
  }
  
  onBodyPartClick(event) {
    event.preventDefault()
    const fileName = `/static/images/exercises/edited/${event.target.dataset.file}.jpg`
    
    this.setState({ image: fileName })
  }
  
  // TODO name this better
  // toggles desc of work
  onChange(event) {
    event.preventDefault()

    if (this.state.showDesc) {
      this.setState({ showDesc: 0 })
    } else {
      this.setState({ showDesc: 1 })
    }
  }

  onSizeChange(event) {
    event.preventDefault()

    console.log('oh hai onSizeChange')

    if (this.state.imageSize === 'large') {
      this.setState({ imageSize: 'small' })
    } 
    if (this.state.imageSize === 'small') {
      this.setState({ imageSize: 'large' })
    }
  }
  
  render() {
    return (
      <Layout
        data={data}
        activeTab={this.state.activeTab}
        onChange={this.onChange}
        onWorkoutClick={this.onWorkoutClick}
        onBodyPartClick={this.onBodyPartClick}
        image={this.state.image}
        onSizeChange={this.onSizeChange}
        imageSize={this.state.imageSize}
        showDesc={this.state.showDesc}
      />
    )
  }
}

export default Page