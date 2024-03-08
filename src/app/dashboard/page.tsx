import Image from "next/image"

export default function DashboardHome() {
    const experiences = [
        {name: "Test Experence 1", description: "This is a testing experience"},
        {name: "Test Experence 2", description: "This is another testing experience"}
    ]
    return (
        <div className={"flex flex-col items-start justify-center px-16 py-8 gap-4 w-full"}>
            <div className={"flex items-center justify-between w-full"}>
                <h1 className={"text-3xl font-bold"}>Welcome to Openchase</h1>
                <p>New Experience</p>
            </div>
            <ul className={"flex flex-col items-center justify-start w-full gap-4"}>
                { experiences.map((experience) => (
                    <DashboardExperience name={experience.name} description={experience.description}/>
                )) }
            </ul>
        </div>
    )
}

function DashboardExperience({name, description}: {name: string, description: string}) {
    return (
        <li className={"flex items-center justify-start w-full h-52 border-2 border-white rounded-xl p-4"}>
            <Image 
                src="/public/next.svg"
                width="200"
                height="200"
                alt={name + "'s Experience Picture"}
            />
            <span className={"border-white border-2 mx-6 h-full"}/>
            <div className={"flex flex-col items-start justify-between w-full h-full py-4"}>
                <div>
                    <h2 className={"text-2xl"}>{name}</h2>
                    <p>{description}</p>
                </div>
                <p>Ends at</p>
            </div>
        </li>
    )
}