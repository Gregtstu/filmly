import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map } from 'rxjs';
import { IGenre } from '../const/genres.const';
import { IMovie } from '../models/movie.model';


export interface IAppStore {
  genres: IGenre[];
  movies: IMovie[];
  favorites: IMovie[];
  filters: {
    name: string;
    genre: number | null;
    from: number | null;
    to: number | null;
    sort: 'genre' | 'name' | 'rating';
  };
}

export const STORE_DEFAULT_VALUE: IAppStore = {
  genres: [],
  movies: [],
  favorites: [],
  filters: {
    name: '',
    genre: null,
    from: null,
    to: null,
    sort: 'name',
  },
};

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly _state$ = new BehaviorSubject<IAppStore>(STORE_DEFAULT_VALUE);

  // Селекторы (стримы для чтения с задержкой, имитирующей сеть)
  readonly genres$ = this._state$.pipe(map(s => s.genres), delay(300));
  readonly movies$ = this._state$.pipe(map(s => s.movies), delay(300));
  readonly favorites$ = this._state$.pipe(map(s => s.favorites), delay(300));
  readonly filters$ = this._state$.pipe(map(s => s.filters));

  // Универсальный метод обновления
  updateData(patch: Partial<IAppStore>): void {
    const currentState = this._state$.getValue();
    this._state$.next({
      ...currentState,
      ...patch,
      // Глубокое слияние для фильтров, если они переданы
      filters: patch.filters ? { ...currentState.filters, ...patch.filters } : currentState.filters
    });
  }

  updateFilters(filters: Partial<IAppStore['filters']>): void {
    this.updateData({ filters: filters as any });
  }

  getFiltersValue() {
    return this.snapshot.filters;
  }

  // Текущее значение (Snapshot)
  get snapshot(): IAppStore {
    return this._state$.getValue();
  }
}
