import { ModalAction, ModalActionType, ModalState } from "./../types/modal";
const initialState = {
  open: false,
  cardValues: null,
};

export const modalReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case ModalActionType.OPEN_MODAL:
      return { ...state, open: true, cardValues: action.payload };
    case ModalActionType.CLOSE_MODAL :
        return {...state,open:false,cardValues:null}
    default:
      return state;
  }
};
