import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

/**
 * Módulos do PrimeNG frequentemente utilizados.
 * Em componentes Standalone do Angular, você pode importar esse array diretamente:
 * 
 * import { PrimeImport } from '../../shared/primeng-imports';
 * 
 * @Component({
 *   selector: 'app-meu-componente',
 *   standalone: true,
 *   imports: [CommonModule, ...PrimeImport],
 *   ...
 * })
 */
export const PrimeImport = [
  ButtonModule,
  CardModule,
  InputTextModule,
  TextareaModule,
  SelectModule,
  CheckboxModule,
  RadioButtonModule,
  FloatLabelModule,
  ToastModule,
  MessageModule,
  AutoCompleteModule,
  DatePickerModule,
  ToggleSwitchModule,
  DialogModule,
  TooltipModule,
  ConfirmDialogModule
];
