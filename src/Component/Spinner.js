import Lottie from '../Component/Lottie'
import spin from '../static/loader.json'
import '../Styles/Spinner.css'

const Spinner = () => {
  return (
          <>
          
          <div id='spin_par'>
          <div className='spin-lottie'>
              <Lottie data={spin} height={`400px`} width={`400px`}/>
          </div>
          </div>
          </>
        
  ) 
}

export default Spinner