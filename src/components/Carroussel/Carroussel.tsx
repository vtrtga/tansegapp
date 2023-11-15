import Image from "next/image";
import { CarrousselProps } from "./Carroussel.types";

function Carroussel ({ content, className }: CarrousselProps) {
    return(
        <section>
            {
                content.map((item, i) => {
                    return(
                        <div key={i}>
                            <Image src={item.url} key={i} alt={item.alt}/>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Carroussel;