import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import
{
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ShowOnDirtyErrorStateMatcher,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatChipsModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSortModule    
} from '@angular/material';


@NgModule({
    providers: [
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ],
    imports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatOptionModule,
        MatSelectModule, MatProgressBarModule, MatProgressSpinnerModule, ReactiveFormsModule,
        MatCheckboxModule, MatInputModule, MatRadioModule, MatIconModule, MatInputModule, MatDialogModule, MatFormFieldModule,
        MatSnackBarModule, MatDividerModule, MatListModule, MatCardModule, MatTableModule, MatTabsModule,
        MatChipsModule, MatStepperModule, MatAutocompleteModule, MatSlideToggleModule,MatSortModule],
    exports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatOptionModule,
        MatSelectModule, MatProgressBarModule, MatProgressSpinnerModule, ReactiveFormsModule,
        MatCheckboxModule, MatInputModule, MatRadioModule, MatIconModule, MatInputModule, MatDialogModule, MatFormFieldModule,
        MatSnackBarModule, MatDividerModule, MatListModule, MatCardModule, MatTableModule, MatTabsModule,
        MatChipsModule, MatStepperModule, MatAutocompleteModule, MatSlideToggleModule, MatSortModule]
})
export class MaterialAppModule { }
