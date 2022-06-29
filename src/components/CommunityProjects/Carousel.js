import React from 'react';
import img1 from '../../assets/images/Rectangle 36.png'
import img2 from '../../assets/images/Rectangle 37.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { makeStyles } from '@material-ui/core';
import { FaArrowRight } from 'react-icons/fa'






const useStyles = makeStyles(() => ({
  box: {
    textAlign: 'center',
    borderRadius: '15px',
    margin: '6% 0',
    marginLeft: '4%',
    height: 'auto',
    textAlign: 'left',
  },
  img_url: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  div: {
    paddingTop: '2%'
  },
  p: {
    fontWeight: 'bold',
    marginTop: '5%',
  },
  h3: {
    fontSize: '1.4em',
  },
  link: {
    display: 'block',
    color: 'dodgerblue',
    marginTop: '5%'
  }
}))




export default function Carousel () {

    
  const classes = useStyles()


  const handleDragStart = (e) => e.preventDefault();


  const data = [
    {
      title: 'Community Project One',
      date: "October 2021",
      url: '#',
      img_url: img1,
    },
    {
      title: 'Community Project Two',
      date: "October 2021",
      url: '#',
      img_url: img2,
    },
    {
      title: 'Community Project Three',
      date: "October 2022",
      url: '#',
      img_url: img1,
    },
    {
      title: 'Community Project Four',
      date: "October 2024",
      url: '#',
      img_url: img2,
    },
  ]




  const project_elements = data.map((each) => {
    return (
        <article className={classes.box}>
          <img src={each.img_url} className={classes.img_url} />
          <div className={classes.div}>
            <h3 className={classes.h3}> { each.title } </h3>
            <p className={classes.date}> { each.date } </p>
            <a className={classes.link} href={`${each.url}`}> See More &nbsp; <FaArrowRight /> </a>
          </div>
        </article>
    )
  });



  const responsive = {
    512:{
      items: 1
    },
    600:{
      items: 2
    },
  }






  return (
    <div className={classes.div}>
      <AliceCarousel 
        mouseTracking
        touchTracking
        autoPlayInterval={1000 / 2}
        animationDuration={1500}
        items={project_elements}
        responsive = {responsive}
        autoPlay 
        infinite
        disableDotsControls
        disableButtonsControls
        style={{paddingTop: '2%'}}
        autoHeight
      />
    </div>
  );
}


