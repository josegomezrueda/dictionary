import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './shared/infrastructure/presentation/buscador/buscador.component';
import { MuestraDatosComponent } from './shared/infrastructure/presentation/muestra-datos/muestra-datos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './auth/infrastructure/presentation/login-component/login-component.component';
import { FilaTablaInglesComponent } from './gestion/ing/infrastructure/presentation/fila-tabla-ingles/fila-tabla-ingles.component';
import { DeleteComponent } from './shared/infrastructure/presentation/delete/delete.component';
import { PaginaInicioComponent } from './shared/infrastructure/presentation/pagina-inicio/pagina-inicio.component';
import { FilaTablaComponent } from './gestion/esp/infrastructure/presentation/fila-tabla/fila-tabla.component';
import { NavMenuComponent } from './shared/infrastructure/presentation/nav-menu/nav-menu.component';
import { FormularioPalabrasComponent } from './shared/infrastructure/presentation/formulario-palabras/formulario-palabras.component';
import { EditarFormularioComponent } from './shared/infrastructure/presentation/editar-formulario/editar-formulario.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InterceptorService } from './shared/infrastructure/services/interceptor.service';
import { RegisterComponent } from './auth/infrastructure/presentation/register/register.component';
import { AnimationComponent } from './shared/infrastructure/presentation/animation/animation.component';









@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    BuscadorComponent,
    MuestraDatosComponent,
    FilaTablaComponent,
    NavMenuComponent,
    FormularioPalabrasComponent,
    EditarFormularioComponent,
    DeleteComponent,
    FilaTablaInglesComponent,
    LoginComponentComponent,
    RegisterComponent,
    AnimationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    ToastModule
  ],
  providers: [MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }


