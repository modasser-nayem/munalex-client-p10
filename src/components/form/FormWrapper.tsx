import { ReactNode } from "react";
import {
   FieldValues,
   FormProvider,
   SubmitHandler,
   useForm,
} from "react-hook-form";

type TFormDefaultsValues = {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   defaultValues?: Record<string, any>;
};

type TFormWrapperProps = {
   children: ReactNode;
   onSubmit: SubmitHandler<FieldValues>;
} & TFormDefaultsValues;

const FormWrapper = ({
   children,
   onSubmit,
   defaultValues,
}: TFormWrapperProps) => {
   const formConfig: TFormDefaultsValues = {};

   if (defaultValues) {
      formConfig["defaultValues"] = defaultValues;
   }

   const methods = useForm(formConfig);

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
   );
};

export default FormWrapper;
