import { Button } from "@material-tailwind/react";
import InputItem from "../components/form/InputItem";
import FormWrapper from "../components/form/FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import { isReduxRTQError } from "../redux/api/baseApi";

const Register = () => {
   const navigate = useNavigate();

   const [registerUser, { isLoading, data, error }] = useRegisterUserMutation();

   let toastId;
   if (data) {
      toastId = toast.success(data?.message);
      navigate("/login");
   }
   if (error) {
      if (isReduxRTQError(error)) {
         toast.error(error.data.message, { id: toastId });
      } else {
         toast.error("Failed to register, server error, try again", {
            id: toastId,
         });
      }
   }

   const onSubmit: SubmitHandler<FieldValues> = async (fromData) => {
      await registerUser(fromData);
   };
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <h2 className="text-3xl font-semibold mb-6">Register</h2>
         <div className=" border-blue-600 sm:w-[400px]">
            <FormWrapper onSubmit={onSubmit}>
               <InputItem
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Provide your name"
               />
               <InputItem
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Provide your email"
               />
               <InputItem
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="password"
               />
               <InputItem
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Retype your password"
               />
               <div className="flex items-center gap-4">
                  <Button
                     type="submit"
                     loading={isLoading}
                     placeholder=""
                  >
                     Register
                  </Button>
                  <p className="text-lg">
                     have an account,{" "}
                     <Link
                        className="text-blue-600"
                        to="/login"
                     >
                        Login here
                     </Link>
                  </p>
               </div>
            </FormWrapper>
         </div>
      </div>
   );
};

export default Register;
