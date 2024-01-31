import Loading from "./components/Loading";
import MainLayout from "./components/layout/MainLayout";
import { useGetMeQuery } from "./redux/features/auth/authApi";
import { setUser } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hooks";

const App = () => {
   const dispatch = useAppDispatch();
   const { data, isLoading, isSuccess } = useGetMeQuery(undefined);

   if (isSuccess) {
      dispatch(setUser(data.data));
   }
   return <>{!isLoading ? <MainLayout /> : <Loading />}</>;
};

export default App;
