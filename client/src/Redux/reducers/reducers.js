import {
  GET_ALL_PRODUCTS,
  GET_BY_ID,
  CREATE_PRODUCT,
  SEARCH_PRODUCTS,
  GET_CATEGORIES,
  LOWER_PRICE,
  HIGHER_PRICE,
  CATEGORY_NAME,
  LOADING,
  UPDATE_CART,
  LOGIN_CLIENT,
  NEW_USER,
  GET_TYPES,
  ALL_USERS,
  EDIT_PRODUCT,
  ORDER_REDUX,
  TOTAL_CARRITO,
  GET_CATEGORY_BY_ID,
  UPDATE_CATEGORY,
  CLIENT_UPDATE,
  UPDATE_PRODUCT,
  CREATE_TYPE,
  GOOGLE_LOGIN,
  ALL_ORDERS,
  EDIT_ORDER,
  CLIENT_STATUS,
  NEW_ORDER_USER,
  BAND_ORDER_USER,
  /* ASC,
  DESC */
} from "../constants";

const initialState = {
  getProducts: [],
  allProducts: [],
  productsBackUp: [],
  getDetail: {},
  createNewProduct: {},
  searchProducts: [],
  loading: false,
  allCategories: [],
  categoryName: "",
  clients: [],
  client: {},
  order: [],
  clientToken: {},
  orderRedux: {
    clientId: "",
    token: "",
    precioTotal: "",
    totalProductos: "",
    order: [],
    status: "",
  },
  createNewUser: {},
  editProduct: {},
  editCategory: {},
  updateProduct: {},

  totalCarrito: 0,
  types: [],
  googleUser: {}, 
  allOrders: [],
  editOrder: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getProducts: action.payload,
        allProducts: action.payload,
        productsBackUp: action.payload,
        loading: false,
      };
    case GET_BY_ID:
      return {
        ...state,
        getDetail: action.payload,
        loading: true,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        getProducts: [...state.allProducts, action.payload],
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload,
        loading: true,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };

    case LOWER_PRICE:
      const res = state.getProducts.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      return {
        ...state,
        getProducts: res,
      };

    case HIGHER_PRICE:
      const res1 = state.getProducts.sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
      return {
        ...state,
        getProducts: res1,
      };

    case CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.payload,
      };

    case LOGIN_CLIENT:
      return {
        ...state,
        client: action.payload,
        
      };

    case UPDATE_CART:
      return {
        ...state,
        order: action.payload,
      };

    case ORDER_REDUX:
      return {
        ...state,
        orderRedux: action.payload,
      };

    case NEW_USER:
      return {
        ...state,
        createNewUser: action.payload,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        editProduct: action.payload,
      };

    case GET_CATEGORY_BY_ID:
      return {
        ...state,
        editCategory: action.payload,
      };

    case TOTAL_CARRITO:
      return {
        ...state,
        totalCarrito: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ALL_USERS:
      return {
        ...state,
        clients: action.payload,
      };

    case UPDATE_CATEGORY:
      return {
        ...state,
        allCategories: [...state.allCategories, action.payload],
      };

    case CLIENT_UPDATE:
      return {
        ...state,
        clients: action.payload,
        
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
      };
    case CREATE_TYPE:
      return {
        ...state,
        types: [...state.types, action.payload],
      };

     case GOOGLE_LOGIN:
       return {
         ...state,
         googleUser: action.payload
       };

       case ALL_ORDERS:
        return {
          ...state,
          allOrders: action.payload,
        };

        case EDIT_ORDER:
      return {
        ...state,
        editOrder: action.payload,
      };
      case CLIENT_STATUS:
        return{
          ...state,
          client:action.payload
        };

        case BAND_ORDER_USER:
          return{
            ...state,
            bandOrderUser: false,
          }
    
        case NEW_ORDER_USER:
          return{
            ...state,
            orderUser: [action.payload],
            bandOrderUser: true,
          }
       
        
    default:
      return state;
  }
};

export default rootReducer;
