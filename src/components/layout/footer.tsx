
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t mt-16 py-8" dir="rtl">
      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} أدهم سيد. جميع الحقوق محفوظة.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mr-4">
              الخصوصية
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mr-4">
              الشروط
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mr-4"
            >
              جيثب
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              تويتر
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
