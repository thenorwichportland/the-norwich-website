import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Norwich</h3>
            <p className="mb-4 text-gray-300">
              Luxury accommodation in the heart of Port Antonio, Jamaica. 
              Experience paradise with stunning views and comfortable amenities.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </SocialLink>
              <SocialLink href="https://instagram.com" label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </SocialLink>
              <SocialLink href="https://airbnb.com" label="Airbnb">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.0002 4.99886C11.0096 3.15498 9.88928 2.36203 8.43037 2.09026C6.05609 1.66599 3.79126 3.12775 3.11166 5.42181C2.47464 7.56321 3.48002 9.65012 4.74267 11.4173L11.5303 21.852C11.5918 21.9471 11.6732 22.0257 11.7684 22.0828C11.8635 22.1399 11.9696 22.1742 12.0783 22.183C12.1871 22.1919 12.2968 22.1751 12.3985 22.1339C12.5001 22.0928 12.5911 22.0284 12.6641 21.9457L19.518 12.776C19.518 12.776 21.9313 9.50466 21.9952 6.69803C22.0591 3.89141 20.2092 2.10203 17.7245 2.05026C16.0523 2.01544 14.2195 3.22413 13.1553 4.99886C13.1553 4.99886 12.5736 5.97665 12.0002 5.97665C11.4269 5.97665 12.0002 4.99886 12.0002 4.99886Z" />
                </svg>
              </SocialLink>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about" legacyBehavior>
                  <a className="text-gray-300 hover:text-white transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="#listings" legacyBehavior>
                  <a className="text-gray-300 hover:text-white transition-colors">Listings</a>
                </Link>
              </li>
              <li>
                <Link href="#gallery" legacyBehavior>
                  <a className="text-gray-300 hover:text-white transition-colors">Gallery</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2 text-gray-300">
                <strong>Address:</strong> Port Antonio, Jamaica
              </p>
              <p className="mb-2 text-gray-300">
                <strong>Phone:</strong>{" "}
                <a href="tel:+12039796203" className="hover:text-white transition-colors">
                  +1 (203) 979-6203
                </a>
              </p>
              <p className="mb-2 text-gray-300">
                <strong>Email:</strong>{" "}
                <a href="mailto:thenorwichportland@gmail.com" className="hover:text-white transition-colors">
                  thenorwichportland@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} The Norwich. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
} 