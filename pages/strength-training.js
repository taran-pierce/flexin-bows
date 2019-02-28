import React from 'react'
import Layout from "../components/Layout";
import data from '../data/programs/strength-training.json'

class Page extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activeTab: 'strength-training-1-3',
      image: '/static/images/exercises/edited/decline-bench-press.jpg',
      value: ''
    }
    
    this.onWorkoutClick = this.onWorkoutClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onBodyPartClick = this.onBodyPartClick.bind(this)
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
  
  onChange(event) {
    event.preventDefault()
    console.log('oh hai, stop')
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