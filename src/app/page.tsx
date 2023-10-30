import Section from "@/components/Section/Section";
import { NextPageWithLayout } from "./pages/_app";
import { ReactElement } from "react";
import TansegLayout from "@/components/Layout/layout";

const Home: NextPageWithLayout = () => {
    return (
        <>
        <TansegLayout>
            <div>
                <Section />
                <Section />
                <Section />
            </div>
        </TansegLayout>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <TansegLayout>
            {page}
        </TansegLayout>
    )
}

export default Home;