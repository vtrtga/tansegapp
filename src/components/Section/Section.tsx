import lorem from "@/lorem";

function Section({style}: any) {
    return(
        <div>
            <section style={style}>
                {
                    lorem
                }
            </section>
        </div>
    )
}

export default Section;