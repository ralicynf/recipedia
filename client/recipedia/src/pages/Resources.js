import ResourceCard from "../components/ResourceCard"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Resources = (props) => {

    const [resources, setResources] = useState([])

    const getResourceList = async () => {
        const resources = await axios.get("http://localhost:3001/recipedia/resources")
        console.log(resources)
        setResources(resources.data.resources)
    }

    useEffect(() => {
        getResourceList()
    }, [])

    return (
      <div>
        <div>
            <h1>ABC's of Cooking</h1>
        </div>
        <div className='the-r-card'>
            {resources.map((result) =>
             <ResourceCard 
                key={result._id}
                id={result._id}
                name={result.name}
                definition={result.definition}
             /> )}
        </div>
      </div>
    )
  }
  
  export default Resources