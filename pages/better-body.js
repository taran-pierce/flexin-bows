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
      value: ''
    }
  
    this.onWorkoutClick = this.onWorkoutClick.bind(this)
    this.onBodyPartClick = this.onBodyPartClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  
  onChange(event) {
    event.preventDefault()
    console.log('oh hai, stop')
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
        onWorkoutClick={this.onWorkoutClick}
        onBodyPartClick={this.onBodyPartClick}
        image={this.state.image}
      />
    )
  }
}

export default Page