import { Component } from "react"
import "../styles/styles.css"
import "../styles/header.css"

export default function MyApp({ Component, pageProps }) {
    return < Component {...pageProps} />
}