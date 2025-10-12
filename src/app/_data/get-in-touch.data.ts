import { signal } from "@angular/core";
import { GetInTouch } from "../shared/models/get-in-touch.model";

export const GET_IN_TOUCH_EN = signal<GetInTouch>({
  heading: 'Get in Touch',
  subheading: "Let's work together on something great",
});

export const GET_IN_TOUCH_PT = signal<GetInTouch>({
  heading: 'Entre em Contato',
  subheading: 'Vamos trabalhar juntos em algo incrível',
});
