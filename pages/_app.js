import "@/styles/globals.css"
import Layouts from "@/layouts"
import Providers from "@/Redux/Providers"

export default function App({ Component, pageProps }) {
  return <Providers>
    <Layouts.Dashboard>
      <Component {...pageProps} />
    </Layouts.Dashboard>
  </Providers>
}
