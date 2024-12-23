import React from 'react'
import { useFirstLetterCapital } from './Custom-Hook-Cap'
import { useCaptcha } from './Custome-Captcha-hook'

const CustomIndex = () => {
  let char=useFirstLetterCapital("weLocMe to ReaCT")
  const Captcha=useCaptcha()

  return (
    <div>
      <h1>Custom Hook</h1>
      <h1>{char}</h1>

      <input type="text" />
      <h2>{Captcha}</h2>

    </div>
  )
}

export default CustomIndex