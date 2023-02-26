import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
    ],
})
export default class MaterialsModule {}
