import Link from 'next/link'

function returnThis (){
  return <div>
    <h1 style={{fontSize:75}}>This is main page</h1>
    <Link href="./news/somenewsdetail">forward me to news detail page</Link>
    {/* <a href="./news/somenewsdetail">forward me to news detail page</a> */}
  </div> 
}


export default returnThis;