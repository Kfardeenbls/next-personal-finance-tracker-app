import PopupEditForm from "@/features/PopupEditForm";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Finance Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100">
        <ReduxProvider>
          <Navbar />
          <PopupEditForm />
          <main style={{ marginTop: "64px" }}>{children}</main>
          <footer className="bg-blue-500 text-white p-4 text-center mt-auto">
            &copy; {new Date().getFullYear()} Finance Tracker
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
