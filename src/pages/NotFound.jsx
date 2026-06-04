import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main className="container flex min-h-screen flex-col items-center justify-center text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                404
            </p>

            <h1 className="mt-4 font-display text-6xl font-black">
                Page Not Found
            </h1>

            <p className="mt-4 max-w-md text-muted">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-8 bg-accent px-8 py-3 text-sm uppercase tracking-[0.08em] text-white"
            >
                Return Home
            </Link>
        </main>
    )
}