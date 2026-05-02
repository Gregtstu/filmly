import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Menu } from "../components/menu/menu";
import { Select } from '../components/select/select';
import { GENRES } from '../../shared/const/genres.const';
import { StoreService } from '../../shared/services/store.service';
import { AsyncPipe } from '@angular/common';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet, Menu, Select, AsyncPipe],
  templateUrl: './private.html',
  styleUrl: './private.scss',
})

export class Private implements OnInit {
  public store: StoreService = inject(StoreService);
  public genres$ = this.store.genres$;
  private _destroyRef = inject(DestroyRef);

  filterForm = new FormGroup({
    genre: new FormControl<string | null>(null),
    search: new FormControl('')
  });

  ngOnInit() {
      const currentFilters = this.store.getFiltersValue();
    this.filterForm.patchValue({
        genre: currentFilters.genre?.toString() ?? null,
        search: currentFilters.name
    }, { emitEvent: false });

    this.filterForm.valueChanges
      .pipe(
        debounceTime(500),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(val => {
        this.store.updateFilters({ name: val.search || '', genre: val.genre ? Number(val.genre) : null });
      });
  }
  handleChange(value: string) {
    console.log('Выбран:', value);
  }
}

