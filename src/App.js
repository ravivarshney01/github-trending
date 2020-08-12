import React from 'react'
import './styles/main.css'
import { render } from 'react-dom'
import Repository from './components/Repository'

const App = () => {
  const repos = [{}, {}]
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
