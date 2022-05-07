import { BookModel } from "../../interfaces/book.interface";

export interface ModalState {
  open: boolean;
  cardValues: BookModel | null;
}

export enum ModalActionType {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
  RESET_VALUES = "RESET_VALUES",
}

interface openModal {
  type: ModalActionType.OPEN_MODAL;
  payload: BookModel;
}

interface closeModal {
  type: ModalActionType.CLOSE_MODAL;
}

interface resetValues {
  type: ModalActionType.RESET_VALUES;
}

export type ModalAction = openModal | closeModal | resetValues;
