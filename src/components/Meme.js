import memeImage from '../images/memeimg.png'
import memesData from '../memesData'

export default function Form() {
  function getMeme() {
    const memeDataArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeDataArray.length)
    const url = memeDataArray[randomNumber].url;
    console.log(url)
  }
  return (
    <main>
      <div className='form'>
        <input type="text" className='form--input' placeholder='Top Text' ></input>
        <input type="text" className='form--input' placeholder='Bottom Text' ></input>
        <button className='form--button' onClick={ getMeme }>Get a New Meme Image 🖼 </button>
      </div>
      <img src={ memeImage } alt='memeImage' className='meme--image' />
    </main>
  )
}
