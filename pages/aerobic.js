import React from 'react'
import Layout from "../components/Layout";
import data from '../data/programs/aerobic.json'

class Page extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activeTab: 'aerobic-1-3',
      value: ''
    }
    
    this.onWorkoutClick = this.onWorkoutClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  
  onWorkoutClick(event) {
    event.preventDefault()
    const id = event.target.dataset.id
    
    this.setState({ activeTab: id })
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
      />
    )
  }
}

export default Page