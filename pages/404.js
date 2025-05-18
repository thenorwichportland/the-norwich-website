import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout title="Page Not Found | The Norwich">
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mb-8">
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" legacyBehavior>
          <a className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all">
            Return to Homepage
          </a>
        </Link>
      </div>
    </Layout>
  );
} 