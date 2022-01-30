import type { NextPage } from 'next'
import Head from 'next/head'
import Button, {ToggleButton} from '../components/button';
import Input from '../components/input';
import { ArrowRight } from '../components/icon'

const H4 = ({ text }: string ) => <h4 className="text-black text-sm font-semibold">{text}</h4>

const Home: NextPage = () => {
  const handleInputChange = (evt) => console.log(evt.target.value)
  return (
    <>
      <Head>
        <title>primelab.io</title>
        <meta name="description" content="primelab.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />        
      </Head>

      <div className="w-full space-y-2">

        <Input
          type="text" 
          label="Label" 
          placeholder="a default input variant" 
          // startAdornment={<ArrowRight className="fill-red"/>} 
          endAdornment={<H4 text=".NEAR" />}
          onChange={handleInputChange} />

        <Input           
          type="text"
          variant="primary"          
          placeholder="an error variant"                     
          onChange={handleInputChange} />        

        <Button variant="outline">
          toggle button
        </Button>

        <ToggleButton>
          toggle button
        </ToggleButton>

        <Button fullWidth endIcon={<ArrowRight className="fill-white"/>}>
          contained button
        </Button>
        <Button variant="dark" endIcon={<ArrowRight className="fill-white"/>}>
          dark button
        </Button>
        <Button disabled>
          disabled button
        </Button>
        <Button variant="text">
          text button
        </Button>
      </div>
    </>
  )
}

export default Home
