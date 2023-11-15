import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import TansegLayout from "@/components/Layout/layout";

const Products: NextPageWithLayout = () => {
    return (
        <TansegLayout>
            <div>
                Products
            </div>
        </TansegLayout>
    )
}

Products.getLayout = function getLayout(page: ReactElement) {
    return (
        <TansegLayout>
            {page}
        </TansegLayout>
    )
}

export default Products;