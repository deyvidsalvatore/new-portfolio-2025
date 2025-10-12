import { signal } from "@angular/core";
import { Footer } from "../shared/models/footer.model";

export const FOOTER_EN = signal<Footer>({
  year: new Date().getFullYear(),
  description: 'All Rights Reserved',
});

export const FOOTER_PT = signal<Footer>({
  year: new Date().getFullYear(),
  description: 'Todos os direitos reservados',
});
