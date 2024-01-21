import './tailwind.css';
import './index.css';
import { ZontesProductPage } from './pages/ZontesProductPage/ZontesProductPage'

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full">
        <ZontesProductPage />
      </div>
    </>
  )
}