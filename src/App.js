import React, { useEffect, useState } from 'react'
import './styles/main.css'
import { render } from 'react-dom'
import Repository from './components/Repository'
import axios from 'axios'
import { date30DaysAgo } from './utils/date'

const App = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${date30DaysAgo()}&sort=stars&order=desc`
      )
      .then((res) => {
        setRepos(res.data.items)
      })
    // return () => {
    //   repos
    // }
  }, [])
  return (
    <div className='container mx-auto lg:pt-24 lg:pb-64'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-6/12 '>
          <h2 className='text-4xl font-semibold text-black'>Github Trending</h2>
          <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
            Trending repositories on Github are as follows:
          </p>
        </div>
      </div>
      {repos.map((repo, i) => (
        <Repository key={i} repo={repo} />
      ))}
    </div>
  )
}
render(<App />, document.getElementById('root'))
