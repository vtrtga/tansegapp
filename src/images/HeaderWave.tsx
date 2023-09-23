import { HeaderStyles } from "@/components/Header/HeaderTypes";

interface Props {
    className?: HeaderStyles;
}

function HeaderWave({ className }: Props) {
    return (
        <div className={className?.parentDiv}>
            <svg width={className?.imageWidth} height={className?.imageHeight} viewBox="0 0 414 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 19.6524L17.25 16.9718C34.5 14.2912 69 8.92988 103.5 9.81784C138 10.7728 172.5 17.8095 207 15.1791C241.5 12.4482 276 0.050262 310.5 0C345 0.050262 379.5 12.4482 396.75 18.7645L414 25.0137V30.375H396.75C379.5 30.375 345 30.375 310.5 30.375C276 30.375 241.5 30.375 207 30.375C172.5 30.375 138 30.375 103.5 30.375C69 30.375 34.5 30.375 17.25 30.375H0V19.6524Z" fill="#02A0D0" fill-opacity="0.2" />
            </svg>
        </div>
    )
}

export default HeaderWave;