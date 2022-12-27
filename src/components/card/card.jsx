import React from 'react'
import Markdown from 'react-markdown'

const Card = (props) => {
  return (
    <div className="card grid-cols-[auto_1fr] gap-fluid-space-2 grid">
      <img
        src={`${props.author.avatar}?h=96`}
        alt=""
        className="card__author rounded-full"
      />
      <div className="card__content">
        <Markdown>{props.cheep}</Markdown>
      </div>
      <a
        href={`/post/${props.slug.current}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more.
      </a>
    </div>
  )
}

export default Card
