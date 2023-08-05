import "@/styles/globals.css"
import Layouts from "@/layouts"

export default function App({ Component, pageProps }) {
  return <Layouts.Dashboard>
    <Component {...pageProps} />
  </Layouts.Dashboard>
}
