import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import CreateEventDrawer from "@/components/create-event";
import { Github, Linkedin } from "lucide-react";

export const metadata = {
  title: "MeetFlow",
  description: "Meeting scheduler",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/*Header*/}
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          {/*Footer*/}
          <footer className="bg-blue-100 py-12 hidden md:block">
            <div className="container mx-auto px-4 text-center text-gray-600">
              {/* Center Logo */}
              <div className="mb-4">
                <img
                  src="/meetflow.png"
                  alt="Logo"
                  className="mx-auto h-12 w-auto"
                />
              </div>
              {/* Footer Text */}
              <p>Made by Padmanaban</p>
              {/* Social Media Links */}
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://github.com/Naaadddiii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                </a>
                <a
                  href="https://www.linkedin.com/in/padmanaban-v-b9846a1b0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                </a>
              </div>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
