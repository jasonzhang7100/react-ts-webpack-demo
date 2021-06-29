import './style.css'
import IMAGE from './reactLogo.png'
import LOGO from './umbrella.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      {/* 注意这里ENV也会随着webpack对应的mode的内容更改 */}
      <h1>
        Edited React TypeScript Webpack Starter Template {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="react logo" width="300" height="200" />
      <img src={LOGO} alt="react svg" width="300" />
      <ClickCounter />
    </>
  )
}
