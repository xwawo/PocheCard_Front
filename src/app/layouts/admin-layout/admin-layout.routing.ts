import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { CardsComponent } from '../../cards/cards.component';



export const AdminLayoutRoutes: Routes = [
    
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'cards',   component: CardsComponent },
    
];
