import React from 'react';
import styles from './talents.module.css';
import { communityData } from './communityData';
import { Grid } from '@mui/material';
import facebook_img from '../../assets/icons/FacebookLogo.png';
import twitter_img from '../../assets/icons/TwitterLogo1.png';
import instagram_img from '../../assets/icons/InstagramLogo1.png';
import github_img from '../../assets/icons/GithubLogo.png';






const CommunityTalents = () => {

  const [ data, setData ] = React.useState([]);

  React.useEffect(() => {
    setData([...communityData])
  }, [])



  const getImg = (val) => {
    switch(val){
      case 'facebook':
        return facebook_img;
      case 'twitter':
        return twitter_img;
      case 'instagram':
        return instagram_img;
      case 'github':
        return github_img;
      default:
        return null
    }
  }

  const community_elements = data.map(each =>  {
    return (
      <Grid item md={4} sm={6} xs={12}>
        <div className={styles.box}>
          <img src={each.img_url} className={styles.avatar} />

          <aside>
            <h3 className={styles.name}> {each.name} </h3>
            <p className={styles.role}> {each.role} </p>
            <p className={styles.languages}> { (each.languages).join(', ') } </p>

            <p className={styles.links}>
              {each.links.map(link => {
                return <img src={getImg(link.name)}/>
              })}
            </p>
          </aside>
        </div>
      </Grid>
    )
  })









  return (
    <div className={styles.container} id="talents">
      <h2> Community Talents </h2>

      <Grid container spacing={5}>
        { community_elements }
      </Grid>

      <p className={styles.see_more}> See More </p>
    </div>
  )
}

export default CommunityTalents