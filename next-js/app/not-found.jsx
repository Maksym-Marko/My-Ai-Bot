import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4 py-20">
            <div className="text-9xl font-semibold text-gray-800 mb-4">404</div>
            <div className="text-4xl font-semibold text-gray-800 mb-4">Page Not Found</div>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the page you're looking for.</p>
            <Link
                href="/"
                className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded transition"
            >
                Return Home
            </Link>
        </div>
    )
}
