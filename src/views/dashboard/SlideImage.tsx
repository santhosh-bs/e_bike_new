import ImageSlider from 'react-simple-image-slider'

const images = [
  { url: 'images/Green_Pyora.jpg' },
  { url: 'images/img1.jpg' },
  { url: 'images/img2.jpg' },
  { url: 'images/img1.jpg' },
  { url: 'images/img2.jpg' }
]

const SlideImage = () => {
  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <ImageSlider
        width={'100%'}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay
        autoPlayDelay={1.0}
      />
    </div>
  )
}

export default SlideImage
