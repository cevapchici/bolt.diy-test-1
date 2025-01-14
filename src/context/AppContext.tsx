import { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  funeralDetails: {
    consultation: {
      date: Date | null;
      type: string;
    };
    documents: Array<{
      name: string;
      status: string;
    }>;
    burialType: {
      type: string;
      location: string;
    };
    serviceDetails: {
      venue: string;
      date: string;
      time: string;
      attendees: string;
      music: boolean;
      flowers: boolean;
      catering: boolean;
      obituary: boolean;
    };
  };
}

const initialState: AppState = {
  funeralDetails: {
    consultation: {
      date: null,
      type: '',
    },
    documents: [],
    burialType: {
      type: '',
      location: '',
    },
    serviceDetails: {
      venue: '',
      date: '',
      time: '',
      attendees: '',
      music: false,
      flowers: false,
      catering: false,
      obituary: false,
    },
  },
};

type AppAction = {
  type: string;
  payload: any;
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'UPDATE_CONSULTATION':
      return {
        ...state,
        funeralDetails: {
          ...state.funeralDetails,
          consultation: action.payload,
        },
      };
    case 'ADD_DOCUMENT':
      return {
        ...state,
        funeralDetails: {
          ...state.funeralDetails,
          documents: [...state.funeralDetails.documents, action.payload],
        },
      };
    case 'UPDATE_BURIAL_TYPE':
      return {
        ...state,
        funeralDetails: {
          ...state.funeralDetails,
          burialType: action.payload,
        },
      };
    case 'UPDATE_SERVICE_DETAILS':
      return {
        ...state,
        funeralDetails: {
          ...state.funeralDetails,
          serviceDetails: action.payload,
        },
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
