import create from 'zustand';

interface AppState {
  counter: number;
  increaseCounter: () => void;
}

export const useStore = create<AppState>((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));
