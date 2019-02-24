import React from 'react'
import Layout from "../components/Layout"
import data from '../data/programs/better-body.json'

class Page extends React.Component {
  static async getInitialProps() {
    const pageProps = 'testing pageProps'
    
    this.state = {
      activeTab: 1
    }
    
    return {
      pageProps,
      activeTab: this.state.activeTab
    }
  }
  
  onChange(event) {
    event.preventDefault()
    console.log('oh hai, stop')
  }
  
  render() {
    return (
      <Layout
        data={data}
        activeTab={this.props.activeTab}
        onChange={this.onChange}
      />
    )
  }
}

export default Page