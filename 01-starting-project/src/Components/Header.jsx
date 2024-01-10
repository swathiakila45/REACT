import image_1 from '../assets/react-core-concepts.png'

const randomFunction = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const definition = randomFunction[getRandomInt(2)]
    return (<header>
      <img src={image_1} alt="Stylized atom" />  {/*Using dynamic value for image */}
      <h1>React Essentials</h1>
      <p>
        {definition} React concepts you will need for almost any app you are
        going to build!  {/*Using dynamic values*/}
      </p>
    </header>)
  }