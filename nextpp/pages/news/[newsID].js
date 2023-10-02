import {useRouter} from 'next/router'
import Link from 'next/link'

function returnThis (){
    const useRout = useRouter();
    console.log(useRout.query.newsID);
    return <div>
        <h1>This is the news detail page heading</h1>
        <Link href='../'>return me to index page</Link>
    </div> 
}

export default returnThis;