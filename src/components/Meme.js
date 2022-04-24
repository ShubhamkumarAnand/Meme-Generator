import memeImage from '../images/memeimg.png'

export default function Form() {
  return (
    <main>
      <form className='form'>
        <input type="text" className='form--input' placeholder='Top Text' ></input>
        <input type="text" className='form--input' placeholder='Bottom Text' ></input>
        <button className='form--button'>Get a New Meme Image 🖼 </button>
      </form>
      <img src={memeImage} alt='memeImage' className='meme--image'/>
    </main>
  )
}
