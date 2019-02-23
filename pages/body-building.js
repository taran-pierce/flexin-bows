import Layout from "../components/Layout";
import data from '../data/programs/body-building.json'

const Page = (props) => {
  return (
    <div>
      <Layout data={data} />
    </div>
  )
}

export default Page