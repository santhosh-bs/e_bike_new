import ImageSlider from 'react-simple-image-slider'

const images = [
  { url: 'images/Green_Pyora.jpg' },
  { url: 'images/Green_Pyora.jpg' },
  { url: 'images/Green_Pyora.jpg' },
  { url: 'images/Green_Pyora.jpg' },
  { url: 'images/Green_Pyora.jpg' }
]

const SlideImage = () => {
  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <ImageSlider width={'100%'} height={504} images={images} showBullets={true} showNavs={true} />
    </div>
  )
}

export default SlideImage
