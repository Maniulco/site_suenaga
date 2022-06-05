import Description from '../components/Head.js'
import Header from '../components/Header.js'
import Head from "next/head"

function Home() {
    return (
        <div>
            <Head>
                <title>Susu</title>
                <meta property="og:title" content="Susu" key="title" />
                <Description/>
            </Head>
                <Header/> 
        </div>
        )

    }
    export default Home
