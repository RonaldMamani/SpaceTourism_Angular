import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { MoonComponent } from './pages/moon/moon.component';
import { MarsComponent } from './pages/mars/mars.component';
import { EuropaComponent } from './pages/europa/europa.component';
import { TitanComponent } from './pages/titan/titan.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent},
    { 
        path: 'destination', 
        component: DestinationComponent,
        children: [
            {
                path: '',
                component: MoonComponent
            },
            {
                path: 'mars',
                component: MarsComponent
            },
            {
                path: 'europa',
                component: EuropaComponent
            },
            {
                path: 'titan',
                component: TitanComponent
            }
        ]
    },
    { path: 'crew', component: CrewComponent},
    { path: 'technology', component: TechnologyComponent}
];
