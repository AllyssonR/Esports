import './styles/main.css';
import logoImg from './assets/logo.svg';
import { GameBanner } from './Components/GameBanner';
import { CreateAdBanner } from './Components/CreateAdBanner';
import { useEffect, useState } from 'react';
interface GamesProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}
export function App() {
  const [games, setGames] = useState<GamesProps[]>([]);
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  });
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {' '}
          duo{' '}
        </span>
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <CreateAdBanner />
    </div>
  );
}
