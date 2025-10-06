// app/layout.js
import './styles/globals.css';
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0 p-0 box-border'>
        <Navbar />
        {children} {/* This renders the content of each page */}
      </body>
    </html>
  );
}
