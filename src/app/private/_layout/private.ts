import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from "@angular/router";
import { Select } from '../components/select/select';
import { StoreService } from '../../shared/services/store.service';
import { AsyncPipe } from '@angular/common';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet, Select, AsyncPipe, ReactiveFormsModule, InputComponent],
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

