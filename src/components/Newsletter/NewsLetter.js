import { Button } from '@mui/material';
import React from 'react'
import styles from './NewsLetter.module.css';
import { FaArrowRight } from 'react-icons/fa'




const NewLetter = () => {
  return (
    <div className={styles.container}>
      <article>
        <section>
          <h2> Sign up to our newsletter </h2>
          <p> Get weekly updates on the latest tech news and events in our community. <br /> 
              Don't miss a thing!
          </p>
          {/* <Button fullWidth variant="contained" endIcon={<FaArrowRight />}> Sign up now </Button> */}
          <button> 
            <aside>
              <p> Sign up now </p> 
              <p> <FaArrowRight /> </p>
            </aside>  
          </button>
        </section>
      </article>
    </div>
  )
}

export default NewLetter