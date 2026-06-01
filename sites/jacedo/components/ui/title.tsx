import React from 'react'

const Title = ({title1, title2, titleStyles, title1styles, paraStyles, para}) => {
    
  return (
    <div className={`${titleStyles}`}>
      <h3 className={`${title1styles}`}>
        {title1}
        <span className='text-destructive font-light underline'>{title2}</span>
      </h3>
      <p className={`${paraStyles} max-w-md`}>
        {para ? para : 'Explore our collection of stylish clothing and footwear, designed to elevate your fashion game. Shop now and discover the latest trends in fashion.'}
      </p>
    </div>
  )
}

export default Title