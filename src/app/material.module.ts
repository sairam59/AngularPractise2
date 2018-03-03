import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, 
    MatRadioModule,
    MatSelectModule, MatSidenavModule
  } from '@angular/material';
@NgModule({
    imports : [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule,
        MatRadioModule, MatSelectModule, MatSidenavModule ],
    exports : [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
         MatCheckboxModule, MatRadioModule, MatSelectModule, MatSidenavModule ],

})


export class MaterialModule {

}
