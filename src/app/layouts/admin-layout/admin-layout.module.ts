import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {CardsComponent} from '../../cards/cards.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {IconsComponent} from '../../icons/icons.component';
import {DisplayComponent} from '../../cards/display/display.component';
import {CreateComponent} from '../../cards/create/create.component';
import {StoreComponent} from '../../store/store.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    CardsComponent,
    UserProfileComponent,
    IconsComponent,
    DisplayComponent,
    CreateComponent,
    StoreComponent,
  ]
})

export class AdminLayoutModule {}
