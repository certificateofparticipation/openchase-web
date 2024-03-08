import Image from 'next/image'

export default function Account() {
    return (
        <div className={"flex items-center justify-center"}>
            <Image 
            src={"/public/next.svg"}
            width="20"
            height="20"
            alt="Profile Picure"
            />
            <p>Account</p>
        </div>
    )
}