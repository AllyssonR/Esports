import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6  self-stretch rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anuncio para encontrar novos players !
            </span>
          </div>
          <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded  flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            <span> Publicar anúncio</span>
          </Dialog.Trigger>
        </div>
      </div>
    </div>
  );
}
