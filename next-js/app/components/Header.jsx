import { getMenuById } from '@/app/services/menuService'
import Link from 'next/link'

const MAIN_MENU_ID = process.env.MAIN_MENU_ID

export default async function Header() {
    const menuData = await getMenuById(MAIN_MENU_ID)

    if (!menuData || !menuData.items?.length) return null

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">Next.js</Link>
                <nav>
                    <ul className="flex space-x-4">
                        {menuData.items.map(item => (
                            <li key={item.id} className="relative group">
                                <Link href={item.url} className="text-[16px] text-gray-800 hover:underline">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
