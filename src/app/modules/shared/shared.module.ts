import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { 
  MatCardModule, 
  MatDividerModule,
  MatButtonModule,
  MatBadgeModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSnackBarModule, 
  MatProgressBarModule, 
  MatProgressSpinnerModule, 
  MatMenuModule 
} from '@angular/material';

const SHARED_MODULES = [
  CommonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule
]

const SHARED_COMPONENTS = []

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS]
})
export class SharedModule { }
