import {  TailSpin  } from 'react-loader-spinner'
const Loading = () => {
    return (

        <div className="h-screen flex justify-center items-center">
              <TailSpin height="80"
       width="80"
       radius="9"
       color="green" className="m-auto flex justify-center"></TailSpin>
        </div>
     
    )
}

export default Loading;