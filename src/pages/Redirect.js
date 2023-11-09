import { useEffect } from 'react'

export default function Redirect() {
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        window.location.replace(`${params.app}://path/${params.path}?token=${params.token}&email=${params.email}&id=${params.id}`);
    }, [])
    
  return (
    <h1>Redirecting...</h1>
  )
}
