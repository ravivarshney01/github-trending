import React from 'react'
import moment from 'moment'

const Repository = ({ repo }) => {
  return (
    <div className='flex bg-gray-100 rounded-lg hover:bg-gray-200 m-4'>
      <img
        className='w-24 h-24 rounded-lg mr-4'
        src={repo.owner.avatar_url}
        alt='dp'
      />
      <div className=''>
        <div className='text-gray-900 font-bold text-xl mb-2'>
          <a
            href={repo.html_url}
            className='underline hover:text-gray-700'
            rel='noopener noreferrer'
            target='_blank'
          >
            {repo.name}
          </a>
        </div>
        <p className='text-gray-600 mb-2'>{repo.description}</p>
        <div className='flex-row'>
          <span className='pr-2'>{repo.stargazers_count} Stars</span>
          <span className='pr-2'>{repo.open_issues_count} Issues</span>
          <span className=''>
            Submitted {moment(repo.created_at).fromNow()} by{' '}
            <a
              className='underline hover:text-gray-700'
              rel='noopener noreferrer'
              target='_blank'
              href={repo.owner.html_url}
            >
              {repo.owner.login}
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Repository
