import type { Route } from "./+types/home";
import { Item } from "~/routes/item";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
export type IItemProps = {
    name: string;
    link: string;
    photo: string;
}

export default function Home() {
    const FamilyItems: IItemProps[] = [
        {
            name: "Explorateur de fichiers",
            link: "http://fs.home",
            photo: "https://filebrowser.org/static/logo.png",
        },
        {
            name: "Photos",
            link: "http://photo.home",
            photo: "https://dl.photoprism.app/img/logo/logo.svg",
        },
    ];
    const MyItems: IItemProps[] = [
        {
            name: "Adguard Home (Filtrage DNS)",
            link: "http://adguard.home",
            photo: "https://avatars3.githubusercontent.com/u/8361145?s=200&v=4",
        },
        {
            name: "Nginx Proxy Manager (reverse proxy)",
            link: "http://nginx.home",
            photo: "https://img.icons8.com/color/512/nginx.png",
        },
    ]
    return (
        <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="text-center">
                <h1 className="sm:text-3xl text-xl font-bold text-gray-900 dark:text-gray-100">
                    Bienvenue sur le portail de la Famille Guazzaroni !
                </h1>
                <h2 className="mt-10 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Des applications pour vous
                </h2>
            </div>

            <div className="mt-6 w-full">
                <Item list={FamilyItems}/>
            </div>

            <div className="mt-10 text-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Des applications pour moi Léo ;)
                </h2>
            </div>

            <div className="mt-6 w-full mb-10">
                <Item list={MyItems}/>
            </div>
        </div>
    );
}