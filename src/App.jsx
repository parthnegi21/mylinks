import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Header Section */}
      <div className="text-center pt-5">
        <h1 className="text-5xl font-bold text-white">My Links</h1>
        <p className="text-xl mt-5 ml-5">Access your favorite websites quickly and easily!</p>
      </div>

      {/* Links Section */}
      <div className='flex justify-center mt-10'>
        <div className="w-3/4 grid grid-cols-2 gap-y-16 lg:grid-cols-3">
          {/* Swiggy */}
          <a className='flex justify-center' href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/AMxJ3o_lo5NDU4rB1wRU3DBeYiNbt258GTxijkhsyao/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWU1NGU1Yjc0/Y2JiNmE4ODBiM2Y2/ZDQyYzY2YjQ1M2Nl/YjAwZWIwNDI3NDQ1/MzcxNDQxZWZjZmUx/YTcxNGRlOS93d3cu/c3dpZ2d5LmNvbS8" alt="Swiggy" />
              </div>
              <div className='text-lg text-white700  flex justify-center'>Swiggy</div>
            </div>
          </a>

          {/* Uber */}
          <a className='flex justify-center' href="https://www.uber.com/in/en/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/KvHUf3oV2J0T65Ndkh-O106daOwvhJtISDe_WYECCXU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTVhNjRmZTJi/NTM3ODdiM2VmMTA5/N2MwNTVkMTkxM2Y3/MTZmMmI4NzZmYzFi/NzhhZTdjZjBkYmEy/YWVjYWZmNi93d3cu/dWJlci5jb20v" alt="Uber" />
              </div>
              <div className='text-lg text-white-500 flex justify-center'>Uber</div>
            </div>
          </a>

          {/* Spotify */}
          <a className='flex justify-center' href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/TEnJcl6pQnFHZ4c2dFZEzF0Vkd1A4CV059HHEkIMLVM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDExZTQ1OTU0/NTllYzVjMzBiOTcy/N2Y2NTkzYzEyM2Nm/ZDY5ZTIxZGUyZmEz/ZGEzYzY5ZmE4ZTcw/M2ZjMWViYS9vcGVu/LnNwb3RpZnkuY29t/Lw" alt="Spotify" />
              </div>
              <div className='text-lg text-white-500 justify-center flex '>Spotify</div>
            </div>
          </a>

          {/* YouTube */}
          <a className='flex justify-center' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/Wg4wjE5SHAargkzePU3eSLmWgVz84BEZk1SjSglJK_U/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTkyZTZiMWU3/YzU3Nzc5YjExYzUy/N2VhZTIxOWNlYjM5/ZGVjN2MyZDY4Nzdh/ZDYzMTYxNmI5N2Rk/Y2Q3N2FkNy93d3cu/eW91dHViZS5jb20v" alt="YouTube" />
              </div>
              <div className='text-lg text-white-500 flex justify-center'>YouTube</div>
            </div>
          </a>

          {/* ChatGPT */}
          <a className='flex justify-center' href="https://openai.com/chatgpt/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/a162Y0hLEPHL4G7WHg0Nw0DxUOn2TknT_UI4sVOwS_E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWE0ODk4ZGY3/Mzk1Y2EwMjAxZjJk/YmEzZWM1MzcyNTZm/MTI0YWEyOWQ3NjVk/MDgxNTMwMGQxNWMx/ZWVmZWMzZC9vcGVu/YWkuY29tLw" alt="ChatGPT" />
              </div>
              <div className='text-lg text-white-500 flex justify-center'>Chat GPT</div>
            </div>
          </a>

          {/* Instagram */}
          <a className='flex justify-center' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/kgdtgqUZQdNYzMKhbVXC5vthlFLPMJ0IOJAdFjEIRuk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2RiYmJiZDA4/NTBkNWQ0ZmQ3NDE5/OGUxOGI4NzE5ZDI0/Zjk0M2ExMDkzZmJm/ODA0MmJiMzkwZjMy/ZDM4YWVkOS93d3cu/aW5zdGFncmFtLmNv/bS8" alt="Instagram" />
              </div>
              <div className='text-lg text-white-500 flex justify-center'>Instagram</div>
            </div>
          </a>

          <a className='flex justify-center' href="https://in.bookmyshow.com/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/6YOdZlsslCeufFuQyS-Ici2WKWWzOM3ohGQmyhe-DnY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2E4MjlhZTE4/YTg2YTkwNjVhMzg5/Mzg4ZDQ2NGNlYmU3/NjJkNWUwNTIxOWQ3/M2MyOGVjNWE5NmU4/MjUwNDY5ZC9pbi5i/b29rbXlzaG93LmNv/bS8" alt="bookmyshow" />
              </div>
              <div className='text-lg text-white-500 flex justify-center'>Bookmyshow</div>
            </div>
          </a>

          <a className='flex justify-center' href="https://www.godaddy.com/en-in" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/v0FOGy2WteTr5_WJaDy1yfO4Na0swmfl4EiXdsA3d04/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmE1NjA0ZjYx/NDFkZTcxODQ4ZTg3/ODYzMDc0NThmOGNl/MWI4ZjA5MzUyODlh/NGMwZGU0M2IzNmYy/ZTc2ZDk1Yi93d3cu/Z29kYWRkeS5jb20v" alt="godaddy" />
              </div>
              <div className='text-lg text-white-500 flex justify-center'>GoDaddy</div>
            </div>
          </a>

          <a className='flex justify-center' href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
            <div className='h-28 w-28 pt-2 rounded-xl hover:shadow-xl hover:scale-105 cursor-pointer border'>
              <div className='w-14 ml-6 mt-3 h-14 rounded-full border flex justify-center items-center'>
                <img src="https://imgs.search.brave.com/1FxIjE2zu04outIWTb9IZXBbAjj8zI7UUDpkNms1eOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTA2M2Y3YWZj/M2M0MTJkZGVmMDkw/ZTllOThkMjU2Mzdm/MDYzOGY5MGQ3NDcz/MmFiM2ZiYmY5YzZk/YmI5NTM1OC9tYWls/Lmdvb2dsZS5jb20v" alt="Gmail" />
              </div>
              <div className='text-lg text-white-500 flex justify-center'>Gmail</div>
            </div>
          </a>

        

          
        </div>
      </div>

      

      {/* Footer Section */}
      <footer className="mt-48 py-4 bg-gray-800 text-center">
        <p className="text-sm">© 2024 My Links. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
