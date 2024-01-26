import { FieldValues, SubmitHandler } from "react-hook-form";
import FormWrapper from "../components/form/FormWrapper";
import InputItem from "../components/form/InputItem";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { setToken } from "../redux/features/auth/authSlice";

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [loginUser, { isLoading, isSuccess, isError, data, error }] =
      useLoginUserMutation();

   let toastId;
   if (isSuccess) {
      toastId = toast.success(data.message);
      const token = data.data.access_token;
      dispatch(setToken(token));
      navigate("/");
   }
   if (isError) {
      toast.error(error.data.message, { id: toastId });
      console.log(error);
   }
   const onSubmit: SubmitHandler<FieldValues> = async (fromData) => {
      await loginUser(fromData);
   };

   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <h2 className="text-3xl font-semibold mb-6">Login</h2>
         <div className=" border-blue-600 sm:w-[400px]">
            <FormWrapper onSubmit={onSubmit}>
               <InputItem
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Provide your email address"
               />
               <InputItem
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Provide your password"
               />
               <div className="flex items-center gap-4">
                  <Button
                     type="submit"
                     loading={isLoading}
                     placeholder=""
                  >
                     Login
                  </Button>
                  <p className="text-lg">
                     New user,{" "}
                     <Link
                        className="text-blue-600"
                        to="/register"
                     >
                        Register here
                     </Link>
                  </p>
               </div>
            </FormWrapper>
         </div>
      </div>
   );
};

export default Login;
