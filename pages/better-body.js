import React from 'react'
import Layout from "../components/Layout"
import data from '../data/programs/better-body.json'

class Page extends React.Component {
  constructor(props) {
    super(props)
  
    // TODO how do I get this first activeTab by default
    this.state = {
      activeTab: 'better-body-M-W-F',
      image: '/static/images/exercises/edited/bench-press-horizontal.jpg',
      value: '',
      showDesc: 1
    }
  
    this.onWorkoutClick = this.onWorkoutClick.bind(this)
    this.onBodyPartClick = this.onBodyPartClick.bind(this)
    this.onChange = this.onChange.bind(this)
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
  
  onBodyPartClick(event) {
    event.preventDefault()
    const fileName = `/static/images/exercises/edited/${event.target.dataset.file}.jpg`
    
    this.setState({ image: fileName })
  }
  
  onWorkoutClick(event) {
    event.preventDefault()
    const id = event.target.dataset.id
    
    this.setState({ activeTab: id })
  }
  
  render() {
    return (
      <Layout
        data={data}
        activeTab={this.state.activeTab}
        onChange={this.onChange}
        showDesc={this.state.showDesc}
        onWorkoutClick={this.onWorkoutClick}
        onBodyPartClick={this.onBodyPartClick}
        image={this.state.image}
      />
    )
  }
}

export default Page