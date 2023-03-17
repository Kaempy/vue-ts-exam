interface loginProps {
  username: string;
  password: string;
}

interface UserProps {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

interface AuthState {
  user: UserProps | null;
}

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

interface FetchedProductsProps {
  loading: boolean;
  status: "idle" | "success" | "error";
  products: Array<ProductProps> | [];
}

interface SelectedProductProps {
  loading: boolean;
  status: "idle" | "success" | "error";
  product: ProductProps | null;
}

interface ProductState {
  fetchedProducts: FetchedProductsProps;
  selectedProduct: SelectedProductProps;
}

interface RootState {
  user: AuthState | null;
  products: ProductState;
}

export {
  UserProps,
  loginProps,
  AuthState,
  ProductProps,
  ProductState,
  RootState,
};
