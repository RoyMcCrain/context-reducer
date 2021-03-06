const initialState = { count: 0 };

export default function(state: any, action: any) {
  switch (action.type) {
    case "reset": {
      return initialState;
    }
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}
