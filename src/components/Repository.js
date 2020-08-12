import React from 'react'

const Repository = ({ repo }) => {
  return (
    <div className='flex bg-gray-100 rounded-lg hover:bg-gray-200 m-4'>
      <img
        className='w-24 rounded-lg mr-4'
        src='https://avatars2.githubusercontent.com/u/37313564?v=4'
        alt='dp'
      />
      <div className=''>
        <div className='text-gray-900 font-bold text-xl mb-2'>Repo Name</div>
        <p className='text-gray-600 mb-2'>Description</p>
        <div className='flex-row'>
          <span className='pr-2'>45 Stars</span>
          <span className='pr-2'>9 Issues</span>
          <span className=''>Date remaining by Author</span>
        </div>
      </div>
    </div>
  )
}

export default Repository
